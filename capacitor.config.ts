import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.b2354d360c0a4deca938d6bfdb0bbe4d',
  appName: 'apaslabs',
  webDir: 'dist',
  server: {
    url: 'https://b2354d36-0c0a-4dec-a938-d6bfdb0bbe4d.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#0f0f17",
      showSpinner: true,
      spinnerColor: "#3b82f6"
    },
    StatusBar: {
      style: "dark",
      backgroundColor: "#0f0f17"
    },
    Keyboard: {
      resize: "body"
    }
  }
};

export default config;