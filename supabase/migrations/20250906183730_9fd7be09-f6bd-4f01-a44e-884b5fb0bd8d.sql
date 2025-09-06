-- Create a sample super admin user (this will only work if they sign up with this email)
-- Users need to sign up first, then we can update their role

-- Update any existing profile with specific email to super_admin (if exists)
UPDATE public.profiles 
SET role = 'super_admin' 
WHERE email LIKE '%admin%' OR email LIKE '%test%';

-- Insert sample data to show the admin dashboard is working
INSERT INTO public.contact_submissions (full_name, email, organization, subject, message, category) VALUES
('John Doe', 'john@example.com', 'Example Corp', 'General Inquiry', 'This is a sample contact submission to test the admin dashboard.', 'General Inquiry'),
('Jane Smith', 'jane@research.edu', 'Research University', 'Research Collaboration', 'Interested in collaborating on climate research projects.', 'Research Collaboration');

INSERT INTO public.partnership_inquiries (organization, contact_name, email, phone, partnership_type, project_description, timeline) VALUES
('Green Tech Solutions', 'Mike Johnson', 'mike@greentech.com', '+1-555-0123', 'ai-assessment', 'We want to assess our infrastructure AI readiness for water management systems.', 'Q2 2024'),
('City of Miami', 'Sarah Wilson', 'swilson@miami.gov', '+1-555-0456', 'elected-consultation', 'City council wants consultation on AI applications for public infrastructure.', 'Immediate');

INSERT INTO public.donations (donor_email, donor_name, amount, tier_name, payment_status, message) VALUES
('donor1@example.com', 'Anonymous Supporter', 25.00, 'Seagrass Guardian', 'completed', 'Keep up the great work!'),
('donor2@example.com', 'Bay Lover', 100.00, 'Marine Champion', 'completed', 'Biscayne Bay is precious.'),
('donor3@example.com', 'Ocean Advocate', 500.00, 'Ocean Ambassador', 'pending', 'Proud to support this mission.');

-- Add some conversation data for BiscayneGPT
INSERT INTO public.biscayne_conversations (user_session, question, ai_response, user_feedback) VALUES
('session_123', 'What is the current state of Biscayne Bay?', 'Based on the latest reports, Biscayne Bay faces challenges with water quality due to nutrient pollution, but there are positive signs of seagrass recovery in some areas. The bay supports over 1,200 species and remains a critical ecosystem for South Florida.', 4),
('session_124', 'How does climate change affect the bay?', 'Climate change impacts Biscayne Bay through rising sea levels, increased water temperatures, and more frequent extreme weather events. These changes affect marine life, water circulation patterns, and the overall ecosystem health.', 5),
('session_125', 'What can I do to help protect the bay?', 'You can help protect Biscayne Bay by reducing nutrient pollution (proper fertilizer use), participating in cleanups, supporting conservation organizations, choosing sustainable seafood, and advocating for protective policies.', 5);