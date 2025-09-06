import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useBayHealthData() {
  const [bayMetrics, setBayMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBayHealthData = async () => {
      try {
        const { data, error } = await supabase
          .from('bay_health_data')
          .select('*')
          .eq('is_active', true)
          .order('display_order', { ascending: true });

        if (error) throw error;

        // Transform the data to match the expected format
        const transformedData = data.map((item) => ({
          label: item.metric_name,
          value: item.current_value,
          trend: item.trend_direction,
          color: item.color_class
        }));

        setBayMetrics(transformedData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBayHealthData();
  }, []);

  return { bayMetrics, loading, error };
}