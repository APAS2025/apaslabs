import React from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { usePWA } from '@/hooks/usePWA';

const OfflineIndicator: React.FC = () => {
  const { isOffline } = usePWA();

  if (!isOffline) return null;

  return (
    <div className="fixed top-20 left-4 right-4 z-40 animate-fade-in">
      <div className="bg-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 mx-auto max-w-xs">
        <WifiOff className="h-4 w-4 flex-shrink-0" />
        <span className="text-sm font-medium">You're offline</span>
      </div>
    </div>
  );
};

export default OfflineIndicator;