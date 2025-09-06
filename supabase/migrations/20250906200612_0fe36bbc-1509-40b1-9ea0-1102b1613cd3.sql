-- Manually update existing admin user profile
UPDATE public.profiles 
SET role = 'super_admin' 
WHERE LOWER(email) = 'admin@apaslabs.org';

-- Fix infinite recursion by creating security definer functions
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS TEXT 
LANGUAGE SQL 
SECURITY DEFINER 
STABLE 
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE user_id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.is_admin_or_super_admin()
RETURNS BOOLEAN 
LANGUAGE SQL 
SECURITY DEFINER 
STABLE 
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND role IN ('admin', 'super_admin')
  );
$$;

CREATE OR REPLACE FUNCTION public.is_super_admin()
RETURNS BOOLEAN 
LANGUAGE SQL 
SECURITY DEFINER 
STABLE 
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND role = 'super_admin'
  );
$$;

-- Drop and recreate all policies without recursion
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Super admins can update all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admins can manage partnership inquiries" ON public.partnership_inquiries;
DROP POLICY IF EXISTS "Admins can view donations" ON public.donations;
DROP POLICY IF EXISTS "Admins can manage bay health data" ON public.bay_health_data;
DROP POLICY IF EXISTS "Admins can read all conversations" ON public.biscayne_conversations;
DROP POLICY IF EXISTS "Admins can manage content blocks" ON public.content_blocks;
DROP POLICY IF EXISTS "Admins can manage site metrics" ON public.site_metrics;

-- Recreate policies using security definer functions
CREATE POLICY "Admins can view all profiles"
ON public.profiles 
FOR SELECT
TO authenticated
USING (public.is_admin_or_super_admin());

CREATE POLICY "Super admins can update all profiles"
ON public.profiles 
FOR UPDATE
TO authenticated
USING (public.is_super_admin());

CREATE POLICY "Admins can view contact submissions"
ON public.contact_submissions 
FOR ALL
TO authenticated
USING (public.is_admin_or_super_admin());

CREATE POLICY "Admins can manage partnership inquiries"
ON public.partnership_inquiries 
FOR ALL
TO authenticated
USING (public.is_admin_or_super_admin());

CREATE POLICY "Admins can view donations"
ON public.donations 
FOR ALL
TO authenticated
USING (public.is_admin_or_super_admin());

CREATE POLICY "Admins can manage bay health data"
ON public.bay_health_data 
FOR ALL
TO authenticated
USING (public.is_admin_or_super_admin());

CREATE POLICY "Admins can read all conversations"
ON public.biscayne_conversations 
FOR SELECT
TO authenticated
USING (public.is_admin_or_super_admin());

CREATE POLICY "Admins can manage content blocks"
ON public.content_blocks 
FOR ALL
TO authenticated
USING (public.is_admin_or_super_admin());

CREATE POLICY "Admins can manage site metrics"
ON public.site_metrics 
FOR ALL
TO authenticated
USING (public.is_admin_or_super_admin());