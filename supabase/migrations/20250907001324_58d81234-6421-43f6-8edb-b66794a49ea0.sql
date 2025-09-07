-- Create newsletter_subscriptions table for email subscriptions
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe (insert)
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscriptions 
FOR INSERT 
TO public
WITH CHECK (true);

-- Only admins can read newsletter subscriptions
CREATE POLICY "Only admins can read newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR SELECT 
TO authenticated
USING (is_admin_or_super_admin());

-- Only admins can update newsletter subscriptions
CREATE POLICY "Only admins can update newsletter subscriptions" 
ON public.newsletter_subscriptions 
FOR UPDATE 
TO authenticated
USING (is_admin_or_super_admin());

-- Create trigger for updated_at
CREATE TRIGGER update_newsletter_subscriptions_updated_at
BEFORE UPDATE ON public.newsletter_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();