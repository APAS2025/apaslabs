import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Plus, Edit2, Trash2, Save, X, FileText } from 'lucide-react';
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

const ContentManager = () => {
  const [contentBlocks, setContentBlocks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingContent, setEditingContent] = useState<any>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [pageFilter, setPageFilter] = useState('all');
  const { toast } = useToast();

  const defaultContent = {
    page_name: 'homepage',
    block_key: '',
    block_type: 'text',
    content: '',
    description: '',
    is_active: true
  };

  const pageOptions = [
    { value: 'homepage', label: 'Homepage' },
    { value: 'about', label: 'About Us' },
    { value: 'contact', label: 'Contact' },
    { value: 'biscaynegpt', label: 'BiscayneGPT' },
    { value: 'partnerships', label: 'Partnerships' },
    { value: 'labs', label: 'Labs' },
    { value: 'community', label: 'Community' },
    { value: 'solutions', label: 'Solutions' }
  ];

  const blockTypes = [
    { value: 'text', label: 'Text Content' },
    { value: 'number', label: 'Number/Statistic' },
    { value: 'json', label: 'JSON Data' },
    { value: 'html', label: 'HTML Content' }
  ];

  useEffect(() => {
    fetchContentBlocks();
  }, []);

  const fetchContentBlocks = async () => {
    try {
      const { data, error } = await supabase
        .from('content_blocks')
        .select('*')
        .order('page_name', { ascending: true });

      if (error) throw error;
      setContentBlocks(data || []);
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

  const saveContentBlock = async (content: any, isNew: boolean = false) => {
    try {
      if (isNew) {
        const { error } = await supabase
          .from('content_blocks')
          .insert([content]);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('content_blocks')
          .update(content)
          .eq('id', content.id);
        
        if (error) throw error;
      }
      
      fetchContentBlocks();
      setEditingContent(null);
      setIsAddingNew(false);
      toast({
        title: "Success",
        description: isNew ? "Content block added successfully" : "Content block updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteContentBlock = async (id: string) => {
    try {
      const { error } = await supabase
        .from('content_blocks')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      fetchContentBlocks();
      toast({
        title: "Success",
        description: "Content block deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getBlockTypeColor = (type: string) => {
    switch (type) {
      case 'text': return 'bg-blue-500';
      case 'number': return 'bg-green-500';
      case 'json': return 'bg-purple-500';
      case 'html': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredContent = contentBlocks.filter(block => 
    pageFilter === 'all' || block.page_name === pageFilter
  );

  const ContentBlockForm = ({ content, onSave, onCancel, isNew }: any) => {
    const [formData, setFormData] = useState(content || defaultContent);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(formData, isNew);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Page Name</label>
            <Select 
              value={formData.page_name} 
              onValueChange={(value) => setFormData({...formData, page_name: value})}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageOptions.map((page) => (
                  <SelectItem key={page.value} value={page.value}>
                    {page.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium">Block Type</label>
            <Select 
              value={formData.block_type} 
              onValueChange={(value) => setFormData({...formData, block_type: value})}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {blockTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium">Block Key (unique identifier)</label>
          <Input
            value={formData.block_key}
            onChange={(e) => setFormData({...formData, block_key: e.target.value})}
            placeholder="e.g., hero_title, stats_section"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Content</label>
          <Textarea
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            placeholder={
              formData.block_type === 'json' 
                ? '{"key": "value", "number": 123}'
                : formData.block_type === 'html'
                ? '<div>HTML content here</div>'
                : 'Your content here...'
            }
            rows={formData.block_type === 'json' || formData.block_type === 'html' ? 6 : 4}
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <Input
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Brief description of this content block"
          />
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button type="submit">
            <Save className="h-4 w-4 mr-2" />
            {isNew ? 'Add Content' : 'Update Content'}
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
          <h2 className="text-2xl font-bold">Content Manager</h2>
          <p className="text-muted-foreground">Manage dynamic content across your website</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={pageFilter} onValueChange={setPageFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pages</SelectItem>
              {pageOptions.map((page) => (
                <SelectItem key={page.value} value={page.value}>
                  {page.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Dialog open={isAddingNew} onOpenChange={setIsAddingNew}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Content Block
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Content Block</DialogTitle>
                <DialogDescription>
                  Create a new dynamic content block for your website
                </DialogDescription>
              </DialogHeader>
              <ContentBlockForm 
                onSave={saveContentBlock}
                onCancel={() => setIsAddingNew(false)}
                isNew={true}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredContent.map((content) => (
          <Card key={content.id} className="bg-gradient-glass border-glass-border">
            {editingContent?.id === content.id ? (
              <CardContent className="p-6">
                <ContentBlockForm 
                  content={editingContent}
                  onSave={saveContentBlock}
                  onCancel={() => setEditingContent(null)}
                  isNew={false}
                />
              </CardContent>
            ) : (
              <>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <CardTitle className="flex items-center gap-2">
                        <span>{content.page_name}</span>
                        <span className="text-muted-foreground">/</span>
                        <span>{content.block_key}</span>
                      </CardTitle>
                      <Badge className={getBlockTypeColor(content.block_type)}>
                        {content.block_type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setEditingContent(content)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteContentBlock(content.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>
                    {content.description || 'No description provided'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/20 rounded-lg p-4">
                    <pre className="text-sm text-muted-foreground whitespace-pre-wrap overflow-x-auto">
                      {content.content.length > 200 
                        ? `${content.content.substring(0, 200)}...` 
                        : content.content
                      }
                    </pre>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="text-center py-8">
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              {pageFilter === 'all' 
                ? 'No content blocks found. Add your first content block to get started!'
                : `No content blocks found for ${pageOptions.find(p => p.value === pageFilter)?.label || pageFilter}`
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContentManager;