import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { CustomDialogContent } from "@/components/CustomDialogContent";
import { Mail, Lock, X, Loader2 } from "lucide-react";

const SocialLoginButtons = ({ className, closeModal, isRegister = false }) => {
  const { toast } = useToast();
  const [activeProvider, setActiveProvider] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = (provider) => {
    setActiveProvider(provider);
    setIsModalOpen(true);
  };

  const handleProviderSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
      
      if (isRegister) {
        toast({
          title: `${activeProvider} registration successful`,
          description: `Your account has been created with ${activeProvider}!`,
          variant: "success",
        });
      } else {
        toast({
          title: `${activeProvider} login successful`,
          description: `You've been signed in with ${activeProvider}!`,
        });
      }
      
      closeModal();
    }, 1500);
  };

  const getProviderColor = (provider) => {
    switch (provider) {
      case "Google":
        return "from-red-500 to-yellow-500";
      case "GitHub":
        return "from-gray-700 to-purple-500";
      case "LinkedIn":
        return "from-blue-600 to-blue-800";
      case "Twitter":
        return "from-black to-blue-400";
      case "Facebook":
        return "from-blue-500 to-blue-700";
      default:
        return "from-blue-500 to-indigo-500";
    }
  };

  const getProviderIcon = (provider) => {
    switch (provider) {
      case "Google":
        return (
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            <path fill="none" d="M1 1h22v22H1z" />
          </svg>
        );
      case "GitHub":
        return (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
          </svg>
        );
      case "LinkedIn":
        return (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      case "Twitter":
        return (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "Facebook":
        return (
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={className}>
        <div className="relative flex items-center justify-center">
          <div className="border-t border-white/10 absolute w-full"></div>
          <span className="bg-[#0a1428] text-gray-300 text-xs px-2 relative font-medium">or continue with</span>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-2">
          {/* Google Login */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              type="button" 
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-white/10 text-white w-full relative overflow-hidden group"
              onClick={() => handleSocialLogin("Google")}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
            </Button>
          </motion.div>
          
          {/* GitHub Login */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              type="button" 
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-white/10 text-white w-full relative overflow-hidden group"
              onClick={() => handleSocialLogin("GitHub")}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-800/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </Button>
          </motion.div>
          
          {/* LinkedIn Login */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              type="button" 
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-white/10 text-white w-full relative overflow-hidden group"
              onClick={() => handleSocialLogin("LinkedIn")}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/10 to-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </Button>
          </motion.div>
        </div>
        
        <div className="mt-2 grid grid-cols-2 gap-2">
          {/* Twitter/X Login */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              type="button" 
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-white/10 text-white w-full relative overflow-hidden group"
              onClick={() => handleSocialLogin("Twitter")}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Button>
          </motion.div>
          
          {/* Facebook Login */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              type="button" 
              variant="outline"
              className="bg-white/5 border-white/10 hover:bg-white/10 text-white w-full relative overflow-hidden group"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Social Login Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <CustomDialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md p-0 gap-0 border-0 shadow-2xl bg-gradient-to-b from-[#0a1428] to-[#060a18]">
          <div className="relative w-full h-full overflow-hidden">
            {/* Enhanced gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-b ${getProviderColor(activeProvider)} opacity-5 z-0`}></div>
            
            {/* Space-themed decorative elements */}
            <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-white opacity-1 blur-2xl"></div>
            <div className="absolute top-60 left-10 w-8 h-8 rounded-full bg-white opacity-1 blur-md"></div>
            <div className="absolute bottom-20 right-20 w-5 h-5 rounded-full bg-white opacity-1 blur-sm"></div>
            <div className="absolute top-40 left-20 w-3 h-3 rounded-full bg-white opacity-1"></div>
            
            <div className="relative z-10 p-8">
              <div className="absolute right-4 top-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-full w-8 h-8 flex items-center justify-center bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="mb-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Enhanced provider icon */}
                  <motion.div 
                    className={`mx-auto bg-gradient-to-br ${getProviderColor(activeProvider)} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-[#0a1428]/80 w-14 h-14 rounded-full flex items-center justify-center border border-white/30">
                      {activeProvider && getProviderIcon(activeProvider)}
                    </div>
                  </motion.div>
                  <DialogTitle className="text-3xl font-bold text-white tracking-tight mb-2">
                    Sign in with {activeProvider}
                  </DialogTitle>
                  <DialogDescription className="text-gray-200 text-base max-w-sm mx-auto">
                    Enter your {activeProvider} credentials to continue your space journey
                  </DialogDescription>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl"
              >
                <form onSubmit={handleProviderSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="social-email" className="text-white text-sm font-semibold pl-1 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-400" />
                      Email Address
                    </Label>
                    <div className="relative group">
                      <Input
                        id="social-email"
                        type="email"
                        placeholder={`Your ${activeProvider} email`}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-4 bg-white/10 border-white/20 text-white text-base focus:ring-blue-500/50 focus:border-blue-500/50 rounded-lg transition-all hover:bg-white/15 h-11"
                      />
                    </div>
                    <p className="text-xs text-blue-300/80 mt-1 pl-1">
                      This should be the email associated with your {activeProvider} account
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="social-password" className="text-white text-sm font-semibold pl-1 flex items-center gap-2">
                      <Lock className="h-4 w-4 text-blue-400" />
                      Password
                    </Label>
                    <div className="relative group">
                      <Input
                        id="social-password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-4 bg-white/10 border-white/20 text-white text-base focus:ring-blue-500/50 focus:border-blue-500/50 rounded-lg transition-all hover:bg-white/15 h-11"
                      />
                    </div>
                    <p className="text-xs text-blue-300/80 mt-1 pl-1">
                      Enter your {activeProvider} password securely
                    </p>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className={`w-full bg-gradient-to-r ${getProviderColor(activeProvider)} text-white font-medium py-2.5 text-base rounded-lg transition-all shadow-lg shadow-black/20 hover:shadow-black/40 h-12 mt-2`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <motion.span 
                          className="flex items-center justify-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Connecting to {activeProvider}...</span>
                        </motion.span>
                      ) : (
                        <motion.span 
                          className="flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {activeProvider && getProviderIcon(activeProvider)}
                          <span>Continue with {activeProvider}</span>
                        </motion.span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
              
              <DialogFooter className="mt-6 flex justify-center px-0">
                <p className="text-sm text-gray-300 text-center font-medium">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-blue-400 font-bold hover:text-blue-300 hover:underline transition-colors flex items-center justify-center gap-1.5 mx-auto"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back to login options
                  </button>
                </p>
              </DialogFooter>
            </div>
          </div>
        </CustomDialogContent>
      </Dialog>
    </>
  );
};

export default SocialLoginButtons; 