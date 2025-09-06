-- Create app_role enum type
CREATE TYPE public.app_role AS ENUM ('user', 'admin', 'super_admin');

-- Drop policies that reference the role column
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Super admins can update all profiles" ON public.profiles;

-- Remove default value, change column type, then add default back
ALTER TABLE public.profiles 
ALTER COLUMN role DROP DEFAULT;

ALTER TABLE public.profiles 
ALTER COLUMN role TYPE app_role USING role::app_role;

ALTER TABLE public.profiles 
ALTER COLUMN role SET DEFAULT 'user'::app_role;

-- Recreate RLS policies
CREATE POLICY "Admins can view all profiles"
ON public.profiles 
FOR SELECT
TO authenticated
USING (EXISTS (
  SELECT 1 FROM public.profiles profiles_1
  WHERE profiles_1.user_id = auth.uid() 
  AND profiles_1.role = ANY(ARRAY['admin', 'super_admin']::app_role[])
));

CREATE POLICY "Super admins can update all profiles"
ON public.profiles 
FOR UPDATE
TO authenticated
USING (EXISTS (
  SELECT 1 FROM public.profiles profiles_1
  WHERE profiles_1.user_id = auth.uid() 
  AND profiles_1.role = 'super_admin'::app_role
));

-- Update the profiles trigger to automatically assign super_admin role to admin@APASlabs.org
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  user_role app_role := 'user';
  user_full_name TEXT;
BEGIN
  -- Extract full name from metadata or email
  user_full_name := COALESCE(
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.raw_user_meta_data ->> 'name',
    SPLIT_PART(NEW.email, '@', 1)
  );

  -- Determine role based on email
  IF NEW.email = 'admin@APASlabs.org' THEN
    user_role := 'super_admin';
  ELSIF NEW.email ILIKE '%admin%' OR NEW.email ILIKE '%test%' THEN
    user_role := 'admin';
  END IF;

  -- Insert into profiles table
  INSERT INTO public.profiles (user_id, email, full_name, role, created_at, updated_at)
  VALUES (NEW.id, NEW.email, user_full_name, user_role, NOW(), NOW());

  RETURN NEW;
END;
$$;