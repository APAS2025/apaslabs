-- Fix RLS policies for form submissions
-- Allow public users to submit contact forms, partnership inquiries, and donations
-- while keeping all data protected from public reading (admin access only)

-- Add INSERT policy for contact submissions
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
TO public
WITH CHECK (true);

-- Add INSERT policy for partnership inquiries  
CREATE POLICY "Anyone can submit partnership inquiries" 
ON public.partnership_inquiries 
FOR INSERT 
TO public
WITH CHECK (true);

-- Add INSERT policy for donations
CREATE POLICY "Anyone can submit donations" 
ON public.donations 
FOR INSERT 
TO public
WITH CHECK (true);