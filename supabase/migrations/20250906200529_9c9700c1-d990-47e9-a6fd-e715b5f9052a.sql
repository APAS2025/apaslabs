-- Fix case-sensitive email check for admin assignment
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  user_role TEXT := 'user';
  user_full_name TEXT;
BEGIN
  -- Extract full name from metadata or email
  user_full_name := COALESCE(
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.raw_user_meta_data ->> 'name',
    SPLIT_PART(NEW.email, '@', 1)
  );

  -- Determine role based on email (case-insensitive)
  IF LOWER(NEW.email) = 'admin@apaslabs.org' THEN
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