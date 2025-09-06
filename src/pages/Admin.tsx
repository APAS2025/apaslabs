import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Mail, 
  Handshake, 
  DollarSign, 
  BarChart3, 
  Settings, 
  FileText,
  MessageSquare,
  Waves,
  LogOut
} from 'lucide-react';
import ContactSubmissions from '@/components/admin/ContactSubmissions';
import PartnershipInquiries from '@/components/admin/PartnershipInquiries';
import DonationsManager from '@/components/admin/DonationsManager';
import SiteMetrics from '@/components/admin/SiteMetrics';
import BayHealthData from '@/components/admin/BayHealthData';
import ContentManager from '@/components/admin/ContentManager';
import ConversationsManager from '@/components/admin/ConversationsManager';
import UsersManager from '@/components/admin/UsersManager';

const Admin = () => {
  const { user, profile, signOut, isSuperAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const handleSignOut = async () => {
    await signOut();
  };

  const stats = [
    { label: 'Total Users', value: '245', icon: Users, color: 'text-blue-500' },
    { label: 'Contact Forms', value: '89', icon: Mail, color: 'text-green-500' },
    { label: 'Partnerships', value: '23', icon: Handshake, color: 'text-purple-500' },
    { label: 'Donations', value: '$12,450', icon: DollarSign, color: 'text-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-background-deep">
      {/* Header */}
      <div className="border-b border-glass-border bg-gradient-glass backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-foreground">APAS Labs Admin</h1>
              <Badge variant={isSuperAdmin ? "default" : "secondary"}>
                {isSuperAdmin ? 'Super Admin' : 'Admin'}
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{profile?.full_name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-8 bg-gradient-glass border-glass-border">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Contacts</span>
            </TabsTrigger>
            <TabsTrigger value="partnerships" className="flex items-center gap-2">
              <Handshake className="h-4 w-4" />
              <span className="hidden sm:inline">Partners</span>
            </TabsTrigger>
            <TabsTrigger value="donations" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Donations</span>
            </TabsTrigger>
            <TabsTrigger value="metrics" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Metrics</span>
            </TabsTrigger>
            <TabsTrigger value="bay-data" className="flex items-center gap-2">
              <Waves className="h-4 w-4" />
              <span className="hidden sm:inline">Bay Data</span>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Content</span>
            </TabsTrigger>
            {isSuperAdmin && (
              <TabsTrigger value="users" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Users</span>
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-glass border-glass-border">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-glass border-glass-border">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your site efficiently</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" onClick={() => setActiveTab('contacts')}>
                    <Mail className="h-4 w-4 mr-2" />
                    View Contacts
                  </Button>
                  <Button variant="outline" onClick={() => setActiveTab('partnerships')}>
                    <Handshake className="h-4 w-4 mr-2" />
                    Partnerships
                  </Button>
                  <Button variant="outline" onClick={() => setActiveTab('metrics')}>
                    <Settings className="h-4 w-4 mr-2" />
                    Site Metrics
                  </Button>
                  <Button variant="outline" onClick={() => setActiveTab('bay-data')}>
                    <Waves className="h-4 w-4 mr-2" />
                    Bay Health
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts">
            <ContactSubmissions />
          </TabsContent>

          <TabsContent value="partnerships">
            <PartnershipInquiries />
          </TabsContent>

          <TabsContent value="donations">
            <DonationsManager />
          </TabsContent>

          <TabsContent value="metrics">
            <SiteMetrics />
          </TabsContent>

          <TabsContent value="bay-data">
            <BayHealthData />
          </TabsContent>

          <TabsContent value="content">
            <ContentManager />
          </TabsContent>

          {isSuperAdmin && (
            <TabsContent value="users">
              <UsersManager />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;