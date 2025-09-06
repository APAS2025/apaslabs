-- Enable RLS on all tables
ALTER TABLE IF EXISTS public.profiles DISABLE ROW LEVEL SECURITY;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Create user profiles table with admin roles
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'super_admin')),
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  subject TEXT,
  category TEXT,
  message TEXT NOT NULL,
  phone TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create partnership inquiries table
CREATE TABLE public.partnership_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  organization TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  partnership_type TEXT NOT NULL,
  project_description TEXT NOT NULL,
  timeline TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewing', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create donations/support table
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_email TEXT NOT NULL,
  donor_name TEXT,
  amount DECIMAL(10,2) NOT NULL,
  tier_name TEXT NOT NULL,
  message TEXT,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed')),
  payment_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create site metrics/statistics table
CREATE TABLE public.site_metrics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  description TEXT,
  category TEXT DEFAULT 'general',
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  updated_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create bay health data table
CREATE TABLE public.bay_health_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  metric_name TEXT NOT NULL,
  current_value TEXT NOT NULL,
  trend_direction TEXT CHECK (trend_direction IN ('up', 'down', 'stable')),
  color_class TEXT DEFAULT 'text-blue-500',
  description TEXT,
  last_updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0
);

-- Create BiscayneGPT conversations table
CREATE TABLE public.biscayne_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_session TEXT NOT NULL,
  question TEXT NOT NULL,
  ai_response TEXT NOT NULL,
  conversation_context JSONB,
  user_feedback INTEGER CHECK (user_feedback BETWEEN 1 AND 5),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create content management table for dynamic content
CREATE TABLE public.content_blocks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_name TEXT NOT NULL,
  block_key TEXT NOT NULL,
  block_type TEXT NOT NULL CHECK (block_type IN ('text', 'number', 'json', 'html')),
  content TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  updated_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(page_name, block_key)
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partnership_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bay_health_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.biscayne_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_blocks ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
    )
  );
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Super admins can update all profiles" ON public.profiles
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role = 'super_admin'
    )
  );

-- RLS Policies for admin-only access (contact submissions, partnerships, donations)
CREATE POLICY "Admins can view contact submissions" ON public.contact_submissions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
    )
  );

CREATE POLICY "Admins can manage partnership inquiries" ON public.partnership_inquiries
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
    )
  );

CREATE POLICY "Admins can view donations" ON public.donations
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
    )
  );

-- Public read access for metrics and bay health data
CREATE POLICY "Anyone can read site metrics" ON public.site_metrics
  FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage site metrics" ON public.site_metrics
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
    )
  );

CREATE POLICY "Anyone can read bay health data" ON public.bay_health_data
  FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage bay health data" ON public.bay_health_data
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
    )
  );

CREATE POLICY "Anyone can read content blocks" ON public.content_blocks
  FOR SELECT USING (is_active = true);
CREATE POLICY "Admins can manage content blocks" ON public.content_blocks
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
    )
  );

-- Public insert for conversations, admins can read all
CREATE POLICY "Anyone can create conversations" ON public.biscayne_conversations
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Admins can read all conversations" ON public.biscayne_conversations
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE user_id = auth.uid() AND role IN ('admin', 'super_admin')
    )
  );

-- Create function to handle new user profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profiles
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function for updating timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_contact_submissions_updated_at BEFORE UPDATE ON public.contact_submissions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_partnership_inquiries_updated_at BEFORE UPDATE ON public.partnership_inquiries FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_site_metrics_updated_at BEFORE UPDATE ON public.site_metrics FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_content_blocks_updated_at BEFORE UPDATE ON public.content_blocks FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample site metrics data
INSERT INTO public.site_metrics (key, label, value, description, category, display_order) VALUES
('total_projects', 'Total Projects', '150+', 'Number of infrastructure projects completed', 'stats', 1),
('communities_served', 'Communities Served', '50+', 'Communities impacted by our work', 'stats', 2),
('partnerships', 'Active Partnerships', '25', 'Current active partnerships', 'stats', 3),
('research_papers', 'Research Publications', '75', 'Published research papers', 'stats', 4),
('students_trained', 'Students Trained', '1200+', 'Students who completed our programs', 'education', 5),
('elected_consultations', 'Elected Official Consultations', '200+', 'Free consultations provided', 'impact', 6);

-- Insert sample bay health metrics
INSERT INTO public.bay_health_data (metric_name, current_value, trend_direction, color_class, description, display_order) VALUES
('Water Quality Score', 'Fair-Poor', 'down', 'text-orange-500', 'Overall water quality assessment based on multiple parameters', 1),
('Seagrass Coverage', 'Recovering', 'up', 'text-green-500', 'Seagrass restoration progress in key areas', 2),
('Nutrient Loading', 'High', 'down', 'text-red-500', 'Nitrogen and phosphorus levels in water', 3),
('Species Count', '1,200+', 'stable', 'text-blue-500', 'Number of documented marine species', 4),
('Coral Health', 'Moderate', 'stable', 'text-yellow-500', 'Coral reef health assessment', 5),
('pH Levels', '8.1', 'stable', 'text-blue-500', 'Ocean acidity measurements', 6);

-- Insert sample content blocks for dynamic content management
INSERT INTO public.content_blocks (page_name, block_key, block_type, content, description) VALUES
('homepage', 'hero_title', 'text', 'Transforming Infrastructure Through AI Innovation', 'Main hero section title'),
('homepage', 'hero_subtitle', 'text', 'Building AI-ready infrastructure professionals and communities through comprehensive training, assessments, and direct support to elected officials.', 'Hero section subtitle'),
('homepage', 'stats_section', 'json', '{"projects": "150+", "communities": "50+", "partnerships": "25", "impact": "$2.5B"}', 'Homepage statistics'),
('biscaynegpt', 'droobi_description', 'text', 'Meet Droobi, the enchanting AI guardian of Biscayne Bay! Born from the collective spirit of over 1.2 million marine creatures.', 'Droobi character description'),
('about', 'mission_statement', 'text', 'To make public infrastructure professionals AI-ready through education, training, and direct support.', 'Organization mission statement'),
('about', 'years_active', 'number', '8', 'Number of years organization has been active'),
('contact', 'office_address', 'text', '123 Research Drive, Innovation District, Miami, FL 33101', 'Main office address'),
('contact', 'phone_number', 'text', '+1 (555) 123-4567', 'Main contact phone number');