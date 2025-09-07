import React from 'react';
import { usePWA } from '@/hooks/usePWA';
import { Button } from '@/components/ui/button';
import { Download, Share2, Bell } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MobileOptimized: React.FC = () => {
  const { isInstallable, isInstalled, installApp, shareApp, requestNotificationPermission } = usePWA();
  const { toast } = useToast();

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      toast({
        title: "App Installing",
        description: "APAS Labs is being installed on your device!",
      });
    }
  };

  const handleShare = async () => {
    const success = await shareApp();
    if (success) {
      toast({
        title: "Shared Successfully",
        description: "Link copied to clipboard or shared!",
      });
    } else {
      toast({
        title: "Share Failed",
        description: "Unable to share at this time.",
        variant: "destructive",
      });
    }
  };

  const handleNotifications = async () => {
    const success = await requestNotificationPermission();
    if (success) {
      toast({
        title: "Notifications Enabled",
        description: "You'll now receive updates from APAS Labs!",
      });
    } else {
      toast({
        title: "Notifications Disabled",
        description: "Enable notifications in your browser settings.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center">
      {isInstallable && !isInstalled && (
        <Button 
          onClick={handleInstall}
          size="sm"
          className="bg-gradient-primary hover:bg-gradient-primary/90 text-white font-medium w-full sm:w-auto"
        >
          <Download className="h-4 w-4 mr-2" />
          Install App
        </Button>
      )}
      
      <Button 
        onClick={handleShare}
        variant="outline"
        size="sm"
        className="border-glass-border hover:bg-primary/5 hover:text-primary w-full sm:w-auto"
      >
        <Share2 className="h-4 w-4 mr-2" />
        Share
      </Button>
      
      <Button 
        onClick={handleNotifications}
        variant="ghost"
        size="sm"
        className="hover:bg-primary/5 hover:text-primary w-full sm:w-auto"
      >
        <Bell className="h-4 w-4 mr-2" />
        Notify Me
      </Button>
    </div>
  );
};

export default MobileOptimized;