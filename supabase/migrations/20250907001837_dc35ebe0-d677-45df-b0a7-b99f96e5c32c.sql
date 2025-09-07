-- Create tables for guild applications

-- Expert applications table
CREATE TABLE public.guild_expert_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  role TEXT,
  experience TEXT,
  expertise TEXT,
  motivation TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Participant applications table  
CREATE TABLE public.guild_participant_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  user_type TEXT,
  sector TEXT,
  industries TEXT[],
  contribution TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Donor applications table
CREATE TABLE public.guild_donor_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  amount TEXT NOT NULL,
  frequency TEXT NOT NULL,
  focus TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.guild_expert_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guild_participant_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.guild_donor_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit applications
CREATE POLICY "Anyone can submit expert applications" 
ON public.guild_expert_applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit participant applications" 
ON public.guild_participant_applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit donor applications" 
ON public.guild_donor_applications 
FOR INSERT 
WITH CHECK (true);

-- Only admins can read applications
CREATE POLICY "Only admins can read expert applications" 
ON public.guild_expert_applications 
FOR SELECT 
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can read participant applications" 
ON public.guild_participant_applications 
FOR SELECT 
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can read donor applications" 
ON public.guild_donor_applications 
FOR SELECT 
USING (is_admin_or_super_admin());

-- Only admins can update applications  
CREATE POLICY "Only admins can update expert applications" 
ON public.guild_expert_applications 
FOR UPDATE 
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can update participant applications" 
ON public.guild_participant_applications 
FOR UPDATE 
USING (is_admin_or_super_admin());

CREATE POLICY "Only admins can update donor applications" 
ON public.guild_donor_applications 
FOR UPDATE 
USING (is_admin_or_super_admin());

-- Create triggers for updated_at
CREATE TRIGGER update_guild_expert_applications_updated_at
BEFORE UPDATE ON public.guild_expert_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_guild_participant_applications_updated_at
BEFORE UPDATE ON public.guild_participant_applications  
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_guild_donor_applications_updated_at
BEFORE UPDATE ON public.guild_donor_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();