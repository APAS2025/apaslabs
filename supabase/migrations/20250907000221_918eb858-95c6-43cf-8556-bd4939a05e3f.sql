-- Fix conflicting policies on biscayne_conversations table
-- Remove any public read policies and ensure only admins can read conversations

-- Drop any existing broad or public read policies that might conflict
DROP POLICY IF EXISTS "Anyone can read all conversations" ON public.biscayne_conversations;
DROP POLICY IF EXISTS "Public can read conversations" ON public.biscayne_conversations;

-- Ensure the admin-only read policy is the only read policy
-- (The "Only admins can read conversations" policy was already created in the previous migration)