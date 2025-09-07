-- Add explicit SELECT policies to prevent any public read access to sensitive data
-- This ensures that only authorized users can read sensitive information

-- Drop existing broad policies and replace with specific ones for contact_submissions
DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contact_submissions;

-- Create specific policies for contact_submissions
CREATE POLICY "Only admins can read contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can update contact submissions" 
ON public.contact_submissions 
FOR UPDATE 
TO authenticated
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can delete contact submissions" 
ON public.contact_submissions 
FOR DELETE 
TO authenticated
USING (is_admin_or_super_admin());

-- Drop existing broad policies and replace with specific ones for partnership_inquiries
DROP POLICY IF EXISTS "Admins can manage partnership inquiries" ON public.partnership_inquiries;

-- Create specific policies for partnership_inquiries
CREATE POLICY "Only admins can read partnership inquiries" 
ON public.partnership_inquiries 
FOR SELECT 
TO authenticated
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can update partnership inquiries" 
ON public.partnership_inquiries 
FOR UPDATE 
TO authenticated
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can delete partnership inquiries" 
ON public.partnership_inquiries 
FOR DELETE 
TO authenticated
USING (is_admin_or_super_admin());

-- Drop existing broad policies and replace with specific ones for donations
DROP POLICY IF EXISTS "Admins can view donations" ON public.donations;

-- Create specific policies for donations
CREATE POLICY "Only admins can read donations" 
ON public.donations 
FOR SELECT 
TO authenticated
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can update donations" 
ON public.donations 
FOR UPDATE 
TO authenticated
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can delete donations" 
ON public.donations 
FOR DELETE 
TO authenticated
USING (is_admin_or_super_admin());

-- Fix biscayne_conversations to prevent public read access
-- Add explicit SELECT policy for authenticated users only (admins)
CREATE POLICY "Only admins can read conversations" 
ON public.biscayne_conversations 
FOR SELECT 
TO authenticated
USING (is_admin_or_super_admin());