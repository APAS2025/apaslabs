import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { DollarSign, Calendar, User, Filter, Download } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const DonationsManager = () => {
  const [donations, setDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const { data, error } = await supabase
        .from('donations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDonations(data || []);
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

  const updatePaymentStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('donations')
        .update({ payment_status: status })
        .eq('id', id);

      if (error) throw error;
      
      fetchDonations();
      toast({
        title: "Success",
        description: "Payment status updated successfully",
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
      case 'pending': return 'bg-yellow-500';
      case 'completed': return 'bg-green-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Bay Protector': return 'bg-blue-500';
      case 'Seagrass Guardian': return 'bg-green-500';
      case 'Marine Champion': return 'bg-cyan-500';
      case 'Ocean Ambassador': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredDonations = donations.filter(donation => 
    statusFilter === 'all' || donation.payment_status === statusFilter
  );

  const totalAmount = filteredDonations
    .filter(d => d.payment_status === 'completed')
    .reduce((sum, donation) => sum + parseFloat(donation.amount), 0);

  const exportDonations = () => {
    const csv = [
      ['Date', 'Donor Name', 'Email', 'Amount', 'Tier', 'Status', 'Payment ID'],
      ...filteredDonations.map(d => [
        new Date(d.created_at).toLocaleDateString(),
        d.donor_name || '',
        d.donor_email,
        d.amount,
        d.tier_name,
        d.payment_status,
        d.payment_id || ''
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `donations_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Donations Manager</h2>
          <p className="text-muted-foreground">Track and manage donations to APAS Labs</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={exportDonations}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Raised</p>
                <p className="text-2xl font-bold">${totalAmount.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Donations</p>
                <p className="text-2xl font-bold">{donations.length}</p>
              </div>
              <User className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold">{donations.filter(d => d.payment_status === 'completed').length}</p>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">✓</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Donation</p>
                <p className="text-2xl font-bold">
                  ${donations.length > 0 ? (totalAmount / donations.filter(d => d.payment_status === 'completed').length || 1).toFixed(2) : '0.00'}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Donations List */}
      <div className="grid gap-4">
        {filteredDonations.map((donation) => (
          <Card key={donation.id} className="bg-gradient-glass border-glass-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CardTitle className="text-lg">
                    ${parseFloat(donation.amount).toFixed(2)}
                  </CardTitle>
                  <Badge className={getStatusColor(donation.payment_status)}>
                    {donation.payment_status}
                  </Badge>
                  <Badge className={getTierColor(donation.tier_name)} variant="outline">
                    {donation.tier_name}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Select 
                    value={donation.payment_status} 
                    onValueChange={(value) => updatePaymentStatus(donation.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <CardDescription className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {donation.donor_name || 'Anonymous'}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(donation.created_at).toLocaleDateString()}
                </span>
                {donation.payment_id && (
                  <span className="text-xs text-muted-foreground">
                    ID: {donation.payment_id}
                  </span>
                )}
              </CardDescription>
            </CardHeader>
            {donation.message && (
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "{donation.message}"
                </p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {filteredDonations.length === 0 && (
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="text-center py-8">
            <DollarSign className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No donations found</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DonationsManager;