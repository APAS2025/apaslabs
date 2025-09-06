import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Plus, Edit2, Trash2, Save, X, Waves, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const BayHealthData = () => {
  const [healthData, setHealthData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingData, setEditingData] = useState<any>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const { toast } = useToast();

  const defaultHealthData = {
    metric_name: '',
    current_value: '',
    trend_direction: 'stable',
    color_class: 'text-blue-500',
    description: '',
    display_order: 0,
    is_active: true
  };

  const colorOptions = [
    { value: 'text-blue-500', label: 'Blue', color: 'bg-blue-500' },
    { value: 'text-green-500', label: 'Green', color: 'bg-green-500' },
    { value: 'text-red-500', label: 'Red', color: 'bg-red-500' },
    { value: 'text-yellow-500', label: 'Yellow', color: 'bg-yellow-500' },
    { value: 'text-orange-500', label: 'Orange', color: 'bg-orange-500' },
    { value: 'text-purple-500', label: 'Purple', color: 'bg-purple-500' },
    { value: 'text-cyan-500', label: 'Cyan', color: 'bg-cyan-500' },
  ];

  useEffect(() => {
    fetchHealthData();
  }, []);

  const fetchHealthData = async () => {
    try {
      const { data, error } = await supabase
        .from('bay_health_data')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setHealthData(data || []);
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

  const saveHealthData = async (data: any, isNew: boolean = false) => {
    try {
      if (isNew) {
        const { error } = await supabase
          .from('bay_health_data')
          .insert([data]);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('bay_health_data')
          .update(data)
          .eq('id', data.id);
        
        if (error) throw error;
      }
      
      fetchHealthData();
      setEditingData(null);
      setIsAddingNew(false);
      toast({
        title: "Success",
        description: isNew ? "Bay health data added successfully" : "Bay health data updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteHealthData = async (id: string) => {
    try {
      const { error } = await supabase
        .from('bay_health_data')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      fetchHealthData();
      toast({
        title: "Success",
        description: "Bay health data deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'stable': return <Minus className="h-4 w-4 text-gray-500" />;
      default: return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const HealthDataForm = ({ data, onSave, onCancel, isNew }: any) => {
    const [formData, setFormData] = useState(data || defaultHealthData);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(formData, isNew);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Metric Name</label>
            <Input
              value={formData.metric_name}
              onChange={(e) => setFormData({...formData, metric_name: e.target.value})}
              placeholder="e.g., Water Quality Score"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium">Current Value</label>
            <Input
              value={formData.current_value}
              onChange={(e) => setFormData({...formData, current_value: e.target.value})}
              placeholder="e.g., Fair-Poor, 85%, 1,200+"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Trend Direction</label>
            <Select 
              value={formData.trend_direction} 
              onValueChange={(value) => setFormData({...formData, trend_direction: value})}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="up">Improving (Up)</SelectItem>
                <SelectItem value="down">Declining (Down)</SelectItem>
                <SelectItem value="stable">Stable</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium">Color Theme</label>
            <Select 
              value={formData.color_class} 
              onValueChange={(value) => setFormData({...formData, color_class: value})}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {colorOptions.map((color) => (
                  <SelectItem key={color.value} value={color.value}>
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full ${color.color}`}></div>
                      {color.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Brief description of this bay health metric"
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
          <h2 className="text-2xl font-bold">Bay Health Data</h2>
          <p className="text-muted-foreground">Manage Biscayne Bay health metrics and environmental data</p>
        </div>
        <Dialog open={isAddingNew} onOpenChange={setIsAddingNew}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Health Metric
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Bay Health Metric</DialogTitle>
              <DialogDescription>
                Create a new environmental metric for Biscayne Bay
              </DialogDescription>
            </DialogHeader>
            <HealthDataForm 
              onSave={saveHealthData}
              onCancel={() => setIsAddingNew(false)}
              isNew={true}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {healthData.map((data) => (
          <Card key={data.id} className="bg-gradient-glass border-glass-border">
            {editingData?.id === data.id ? (
              <CardContent className="p-6">
                <HealthDataForm 
                  data={editingData}
                  onSave={saveHealthData}
                  onCancel={() => setEditingData(null)}
                  isNew={false}
                />
              </CardContent>
            ) : (
              <>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CardTitle className="flex items-center gap-2">
                        <span className={`text-2xl font-bold ${data.color_class}`}>
                          {data.current_value}
                        </span>
                        <span>{data.metric_name}</span>
                        {getTrendIcon(data.trend_direction)}
                      </CardTitle>
                      <Badge variant={
                        data.trend_direction === 'up' ? 'default' :
                        data.trend_direction === 'down' ? 'destructive' : 'secondary'
                      }>
                        {data.trend_direction}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingData(data)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteHealthData(data.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>
                    Last updated: {new Date(data.last_updated).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                {data.description && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{data.description}</p>
                  </CardContent>
                )}
              </>
            )}
          </Card>
        ))}
      </div>

      {healthData.length === 0 && (
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="text-center py-8">
            <Waves className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No bay health metrics found. Add your first metric to get started!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BayHealthData;