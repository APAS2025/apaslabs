import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Eye, Handshake, Mail, Calendar, Building2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PartnershipInquiries = () => {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('partnership_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
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

  const updateStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('partnership_inquiries')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      fetchInquiries();
      toast({
        title: "Success",
        description: "Status updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'reviewing': return 'bg-yellow-500';
      case 'approved': return 'bg-green-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPartnershipTypeColor = (type: string) => {
    switch (type) {
      case 'ai-assessment': return 'bg-purple-500';
      case 'training-program': return 'bg-blue-500';
      case 'elected-consultation': return 'bg-green-500';
      case 'subscription-training': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredInquiries = inquiries.filter(inquiry => 
    statusFilter === 'all' || inquiry.status === statusFilter
  );

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Partnership Inquiries</h2>
          <p className="text-muted-foreground">Manage partnership requests and collaborations</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="reviewing">Reviewing</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredInquiries.map((inquiry) => (
          <Card key={inquiry.id} className="bg-gradient-glass border-glass-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CardTitle className="text-lg">{inquiry.organization}</CardTitle>
                  <Badge className={getStatusColor(inquiry.status)}>
                    {inquiry.status}
                  </Badge>
                  <Badge className={getPartnershipTypeColor(inquiry.partnership_type)} variant="outline">
                    {inquiry.partnership_type.replace('-', ' ')}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Select value={inquiry.status} onValueChange={(value) => updateStatus(inquiry.id, value)}>
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="reviewing">Reviewing</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Partnership Inquiry: {inquiry.organization}</DialogTitle>
                        <DialogDescription>
                          Submitted on {new Date(inquiry.created_at).toLocaleDateString()}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Organization</label>
                            <p className="text-sm text-muted-foreground">{inquiry.organization}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Contact Name</label>
                            <p className="text-sm text-muted-foreground">{inquiry.contact_name}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Email</label>
                            <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Phone</label>
                            <p className="text-sm text-muted-foreground">{inquiry.phone || 'Not provided'}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Partnership Type</label>
                            <p className="text-sm text-muted-foreground">{inquiry.partnership_type.replace('-', ' ')}</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Timeline</label>
                            <p className="text-sm text-muted-foreground">{inquiry.timeline || 'Not specified'}</p>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Project Description</label>
                          <p className="text-sm text-muted-foreground whitespace-pre-wrap">{inquiry.project_description}</p>
                        </div>
                        <div className="flex gap-4">
                          <Button variant="outline" asChild>
                            <a href={`mailto:${inquiry.email}?subject=Re: Partnership Inquiry - ${inquiry.organization}`}>
                              <Mail className="h-4 w-4 mr-2" />
                              Reply by Email
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <CardDescription className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  {inquiry.contact_name}
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {inquiry.email}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(inquiry.created_at).toLocaleDateString()}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {inquiry.project_description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredInquiries.length === 0 && (
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="text-center py-8">
            <Handshake className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No partnership inquiries found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PartnershipInquiries;