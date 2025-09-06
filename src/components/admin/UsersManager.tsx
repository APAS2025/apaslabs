import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Users, Crown, Shield, User, Calendar, Mail } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const UsersManager = () => {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [roleFilter, setRoleFilter] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProfiles(data || []);
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

  const updateUserRole = async (userId: string, newRole: string) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('user_id', userId);

      if (error) throw error;
      
      fetchProfiles();
      toast({
        title: "Success",
        description: "User role updated successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'super_admin': return 'bg-red-500';
      case 'admin': return 'bg-orange-500';
      case 'user': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super_admin': return Crown;
      case 'admin': return Shield;
      case 'user': return User;
      default: return User;
    }
  };

  const filteredProfiles = profiles.filter(profile => 
    roleFilter === 'all' || profile.role === roleFilter
  );

  const stats = {
    totalUsers: profiles.length,
    admins: profiles.filter(p => p.role === 'admin').length,
    superAdmins: profiles.filter(p => p.role === 'super_admin').length,
    regularUsers: profiles.filter(p => p.role === 'user').length
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Users Manager</h2>
          <p className="text-muted-foreground">Manage user accounts and permissions</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="user">Users</SelectItem>
              <SelectItem value="admin">Admins</SelectItem>
              <SelectItem value="super_admin">Super Admins</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Users</p>
                <p className="text-2xl font-bold">{stats.totalUsers}</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Regular Users</p>
                <p className="text-2xl font-bold">{stats.regularUsers}</p>
              </div>
              <User className="h-8 w-8 text-gray-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Admins</p>
                <p className="text-2xl font-bold">{stats.admins}</p>
              </div>
              <Shield className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Super Admins</p>
                <p className="text-2xl font-bold">{stats.superAdmins}</p>
              </div>
              <Crown className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users List */}
      <div className="grid gap-4">
        {filteredProfiles.map((profile) => {
          const RoleIcon = getRoleIcon(profile.role);
          
          return (
            <Card key={profile.id} className="bg-gradient-glass border-glass-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <RoleIcon className="h-5 w-5" />
                      <CardTitle className="text-lg">
                        {profile.full_name || 'Unnamed User'}
                      </CardTitle>
                    </div>
                    <Badge className={getRoleColor(profile.role)}>
                      {profile.role.replace('_', ' ')}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select 
                      value={profile.role} 
                      onValueChange={(value) => updateUserRole(profile.user_id, value)}
                    >
                      <SelectTrigger className="w-36">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="super_admin">Super Admin</SelectItem>
                      </SelectContent>
                    </Select>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>User Profile Details</DialogTitle>
                          <DialogDescription>
                            Complete user information and activity
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium">Full Name</label>
                              <p className="text-sm text-muted-foreground">{profile.full_name || 'Not provided'}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Email</label>
                              <p className="text-sm text-muted-foreground">{profile.email}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Role</label>
                              <p className="text-sm text-muted-foreground">{profile.role.replace('_', ' ')}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">User ID</label>
                              <p className="text-sm text-muted-foreground font-mono">{profile.user_id}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Account Created</label>
                              <p className="text-sm text-muted-foreground">
                                {new Date(profile.created_at).toLocaleDateString()}
                              </p>
                            </div>
                            <div>
                              <label className="text-sm font-medium">Last Updated</label>
                              <p className="text-sm text-muted-foreground">
                                {new Date(profile.updated_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          {profile.avatar_url && (
                            <div>
                              <label className="text-sm font-medium">Avatar</label>
                              <img 
                                src={profile.avatar_url} 
                                alt="User avatar" 
                                className="w-16 h-16 rounded-full mt-2"
                              />
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <CardDescription className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {profile.email}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Joined {new Date(profile.created_at).toLocaleDateString()}
                  </span>
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {filteredProfiles.length === 0 && (
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="text-center py-8">
            <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              {roleFilter === 'all' 
                ? 'No users found in the system'
                : `No ${roleFilter.replace('_', ' ')}s found`
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UsersManager;