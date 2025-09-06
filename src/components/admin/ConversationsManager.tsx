import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MessageSquare, Calendar, Download, Eye, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';

const ConversationsManager = () => {
  const [conversations, setConversations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    try {
      const { data, error } = await supabase
        .from('biscayne_conversations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setConversations(data || []);
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

  const exportConversations = () => {
    const csv = [
      ['Date', 'Session', 'Question', 'AI Response', 'Feedback', 'Context'],
      ...conversations.map(c => [
        new Date(c.created_at).toLocaleDateString(),
        c.user_session,
        c.question.replace(/"/g, '""'), // Escape quotes
        c.ai_response.replace(/"/g, '""'),
        c.user_feedback || '',
        JSON.stringify(c.conversation_context || {})
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `droobi_conversations_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const getFeedbackColor = (rating: number | null) => {
    if (!rating) return 'text-gray-400';
    if (rating >= 4) return 'text-green-500';
    if (rating >= 3) return 'text-yellow-500';
    return 'text-red-500';
  };

  const renderStars = (rating: number | null) => {
    if (!rating) return <span className="text-gray-400">No rating</span>;
    
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-current text-yellow-500' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-muted-foreground">({rating}/5)</span>
      </div>
    );
  };

  const stats = {
    totalConversations: conversations.length,
    averageRating: conversations.filter(c => c.user_feedback).length > 0 
      ? (conversations.filter(c => c.user_feedback).reduce((sum, c) => sum + c.user_feedback, 0) / 
         conversations.filter(c => c.user_feedback).length).toFixed(1)
      : 'N/A',
    ratedConversations: conversations.filter(c => c.user_feedback).length,
    uniqueSessions: new Set(conversations.map(c => c.user_session)).size
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Droobi Conversations</h2>
          <p className="text-muted-foreground">Monitor BiscayneGPT interactions and user feedback</p>
        </div>
        <Button variant="outline" onClick={exportConversations}>
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Conversations</p>
                <p className="text-2xl font-bold">{stats.totalConversations}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Unique Sessions</p>
                <p className="text-2xl font-bold">{stats.uniqueSessions}</p>
              </div>
              <Calendar className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
                <p className="text-2xl font-bold">{stats.averageRating}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Rated Conversations</p>
                <p className="text-2xl font-bold">{stats.ratedConversations}</p>
              </div>
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white">👍</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conversations List */}
      <div className="grid gap-4">
        {conversations.map((conversation) => (
          <Card key={conversation.id} className="bg-gradient-glass border-glass-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CardTitle className="text-lg">
                    Session: {conversation.user_session.substring(0, 8)}...
                  </CardTitle>
                  {conversation.user_feedback && (
                    <div className="flex items-center gap-2">
                      {renderStars(conversation.user_feedback)}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Full
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Conversation Details</DialogTitle>
                        <DialogDescription>
                          Session: {conversation.user_session} • {new Date(conversation.created_at).toLocaleString()}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-blue-600 mb-2">User Question:</h4>
                          <p className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm">
                            {conversation.question}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-600 mb-2">Droobi's Response:</h4>
                          <p className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-sm whitespace-pre-wrap">
                            {conversation.ai_response}
                          </p>
                        </div>
                        {conversation.user_feedback && (
                          <div>
                            <h4 className="font-semibold mb-2">User Feedback:</h4>
                            <div className="flex items-center gap-2">
                              {renderStars(conversation.user_feedback)}
                            </div>
                          </div>
                        )}
                        {conversation.conversation_context && (
                          <div>
                            <h4 className="font-semibold mb-2">Context Data:</h4>
                            <pre className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-xs overflow-x-auto">
                              {JSON.stringify(conversation.conversation_context, null, 2)}
                            </pre>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <CardDescription className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(conversation.created_at).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {conversation.question.length} chars question
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-blue-600 mb-1">Question:</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {conversation.question}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-600 mb-1">Response:</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {conversation.ai_response}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {conversations.length === 0 && (
        <Card className="bg-gradient-glass border-glass-border">
          <CardContent className="text-center py-8">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No conversations found. Users haven't started chatting with Droobi yet!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ConversationsManager;