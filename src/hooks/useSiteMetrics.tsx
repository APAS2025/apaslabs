import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useSiteMetrics(category?: string) {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSiteMetrics = async () => {
      try {
        let query = supabase
          .from('site_metrics')
          .select('*')
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        if (category) {
          query = query.eq('category', category);
        }

        const { data, error } = await query;

        if (error) throw error;
        setMetrics(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSiteMetrics();
  }, [category]);

  return { metrics, loading, error };
}