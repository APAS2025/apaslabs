import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Plus, Edit2, Trash2, Save, X, BarChart3 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const SiteMetrics = () => {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingMetric, setEditingMetric] = useState<any>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const { toast } = useToast();

  const defaultMetric = {
    key: '',
    label: '',
    value: '',
    description: '',
    category: 'general',
    display_order: 0,
    is_active: true
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const { data, error } = await supabase
        .from('site_metrics')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setMetrics(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const saveMetric = async (metric: any, isNew: boolean = false) => {
    try {
      if (isNew) {
        const { error } = await supabase
          .from('site_metrics')
          .insert([metric]);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('site_metrics')
          .update(metric)
          .eq('id', metric.id);
        
        if (error) throw error;
      }
      
      fetchMetrics();
      setEditingMetric(null);
      setIsAddingNew(false);
      toast({
        title: "Success",
        description: isNew ? "Metric added successfully" : "Metric updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteMetric = async (id: string) => {
    try {
      const { error } = await supabase
        .from('site_metrics')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      fetchMetrics();
      toast({
        title: "Success",
        description: "Metric deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const MetricForm = ({ metric, onSave, onCancel, isNew }: any) => {
    const [formData, setFormData] = useState(metric || defaultMetric);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(formData, isNew);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Key (unique identifier)</label>
            <Input
              value={formData.key}
              onChange={(e) => setFormData({...formData, key: e.target.value})}
              placeholder="e.g., total_projects"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Display Label</label>
            <Input
              value={formData.label}
              onChange={(e) => setFormData({...formData, label: e.target.value})}
              placeholder="e.g., Total Projects"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Value</label>
            <Input
              value={formData.value}
              onChange={(e) => setFormData({...formData, value: e.target.value})}
              placeholder="e.g., 150+"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Category</label>
            <Select 
              value={formData.category} 
              onValueChange={(value) => setFormData({...formData, category: value})}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="stats">Statistics</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="impact">Impact</SelectItem>
                <SelectItem value="community">Community</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Brief description of this metric"
          />
        </div>

        <div>
          <label className="text-sm font-medium">Display Order</label>
          <Input
            type="number"
            value={formData.display_order}
            onChange={(e) => setFormData({...formData, display_order: parseInt(e.target.value)})}
            min="0"
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button type="submit">
            <Save className="h-4 w-4 mr-2" />
            {isNew ? 'Add Metric' : 'Update Metric'}
          </Button>
        </div>
      </form>
    );
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Site Metrics</h2>
          <p className="text-muted-foreground">Manage dynamic statistics displayed across your site</p>
        </div>
        <Dialog open={isAddingNew} onOpenChange={setIsAddingNew}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Metric
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Site Metric</DialogTitle>
              <DialogDescription>
                Create a new metric that will be displayed on your website
              </DialogDescription>
            </DialogHeader>
            <MetricForm 
              onSave={saveMetric}
              onCancel={() => setIsAddingNew(false)}
              isNew={true}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {metrics.map((metric) => (
          <Card key={metric.id} className="bg-gradient-glass border-glass-border">
            {editingMetric?.id === metric.id ? (
              <CardContent className="p-6">
                <MetricForm 
                  metric={editingMetric}
                  onSave={saveMetric}
                  onCancel={() => setEditingMetric(null)}
                  isNew={false}
                />
              </CardContent>
            ) : (
              <>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{metric.value}</span>
                        <span>{metric.label}</span>
                      </CardTitle>
                      <CardDescription>
                        <span className="inline-flex items-center gap-2">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            {metric.category}
                          </span>
                          <span>Key: {metric.key}</span>
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingMetric(metric)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteMetric(metric.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                {metric.description && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                )}
              </>
            )}
          </Card>
        ))}
      </div>

      {metrics.length === 0 && (
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="text-center py-8">
            <BarChart3 className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No metrics found. Add your first metric to get started!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SiteMetrics;