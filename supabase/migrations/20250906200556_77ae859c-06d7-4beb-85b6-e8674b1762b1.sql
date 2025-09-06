-- Update existing admin user role
UPDATE public.profiles 
SET role = 'super_admin' 
WHERE LOWER(email) = 'admin@apaslabs.org';