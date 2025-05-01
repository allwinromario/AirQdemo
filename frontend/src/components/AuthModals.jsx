import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { 
  Dialog, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter
} from "@/components/ui/dialog";
import { CustomDialogContent } from "@/components/CustomDialogContent";
import { Mail, Lock, User, LogIn, UserPlus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundStars from "@/components/BackgroundStars";
import SocialLoginButtons from "@/components/SocialLoginButtons";

const AuthModals = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  
  // Function to switch between modals
  const switchToRegister = () => {
    setIsLoginOpen(false);
    setTimeout(() => setIsRegisterOpen(true), 100);
  };
  
  const switchToLogin = () => {
    setIsRegisterOpen(false);
    setTimeout(() => setIsLoginOpen(true), 100);
  };
  
  return (
    <>
      <LoginModal 
        isOpen={isLoginOpen} 
        setIsOpen={setIsLoginOpen} 
        onSwitchToRegister={switchToRegister} 
      />
      <RegisterModal 
        isOpen={isRegisterOpen} 
        setIsOpen={setIsRegisterOpen} 
        onSwitchToLogin={switchToLogin} 
      />
      
      <div className="flex items-center gap-3">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="sm"
            variant="ghost"
            className="text-white gap-2 rounded-full hover:bg-white/10 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => setIsLoginOpen(true)}
          >
            <LogIn size={16} className="text-space-blue" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="sm"
            className="bg-space-blue hover:bg-space-blue/90 text-white gap-2 rounded-full px-4 transition-all shadow-md hover:shadow-lg hover:shadow-space-blue/20"
            onClick={() => setIsRegisterOpen(true)}
          >
            <UserPlus size={16} />
            <span className="hidden sm:inline">Register</span>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

const LoginModal = ({ isOpen, setIsOpen, onSwitchToRegister }) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login successful",
        description: "Welcome back to AirQ!",
      });
      setIsOpen(false);
      // In a real app, you would handle authentication here
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <CustomDialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md p-0 gap-0 border-0 shadow-2xl">
        <div className="relative w-full h-full overflow-hidden">
          {/* Background with stars and gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060c18] to-[#0a1428] z-0">
            <div className="absolute inset-0 opacity-30">
              <BackgroundStars />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -ml-16 -mb-16"></div>
          
          <div className="relative z-10 p-6">
            <div className="absolute right-4 top-4">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full w-7 h-7 flex items-center justify-center bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="mb-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
                  <LogIn size={20} className="text-blue-400" />
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-white tracking-tight">Welcome back</DialogTitle>
                <DialogDescription className="text-gray-300 mt-2 text-base max-w-sm mx-auto">
                  Sign in to your AirQ account to monitor and track air quality
                </DialogDescription>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-sm font-semibold">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-blue-400 transition-colors" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10 text-white text-base focus:ring-blue-500/50 focus:border-blue-500/50 transition-all hover:bg-white/10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-white text-sm font-semibold">Password</Label>
                    <button 
                      type="button"
                      className="text-xs font-medium text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-blue-400 transition-colors" />
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10 text-white text-base focus:ring-blue-500/50 focus:border-blue-500/50 transition-all hover:bg-white/10"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Your password should be at least 8 characters
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 text-base rounded-md transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.span 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Signing in...
                    </motion.span>
                  ) : (
                    <motion.span 
                      className="flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <LogIn size={16} />
                      Sign In
                    </motion.span>
                  )}
                </Button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mt-6"
            >
              <SocialLoginButtons 
                className="w-full" 
                closeModal={() => setIsOpen(false)}
                isRegister={false}
              />
            </motion.div>
                    
            <DialogFooter className="mt-6 flex justify-center px-0">
              <p className="text-sm text-gray-300 text-center font-medium">
                Don't have an account?{" "}
                <button 
                  onClick={onSwitchToRegister}
                  className="text-blue-400 font-bold hover:text-blue-300 hover:underline transition-colors"
                >
                  Register
                </button>
              </p>
            </DialogFooter>
          </div>
        </div>
      </CustomDialogContent>
    </Dialog>
  );
};

const RegisterModal = ({ isOpen, setIsOpen, onSwitchToLogin }) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Passwords do not match",
        description: "Please ensure both passwords match."
      });
      return;
    }
    
    if (!agreeTerms) {
      toast({
        variant: "destructive",
        title: "Terms and conditions",
        description: "You must agree to our terms and conditions."
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration successful",
        description: "Welcome to AirQ! Your account has been created.",
        variant: "success"
      });
      setIsOpen(false);
      // In a real app, you would handle account creation here
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <CustomDialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md p-0 gap-0 border-0 shadow-2xl">
        <div className="relative w-full h-full overflow-hidden">
          {/* Background with stars and gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f0a28] to-[#0a1028] z-0">
            <div className="absolute inset-0 opacity-30">
              <BackgroundStars />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mt-16"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mb-16"></div>
          
          <div className="relative z-10 p-6">
            <div className="absolute right-4 top-4">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full w-7 h-7 flex items-center justify-center bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="mb-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mx-auto bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 border border-purple-500/20">
                  <UserPlus size={20} className="text-purple-400" />
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-white tracking-tight">Create an account</DialogTitle>
                <DialogDescription className="text-gray-300 mt-2 text-base max-w-sm mx-auto">
                  Join AirQ today and start monitoring air quality in your area
                </DialogDescription>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white text-sm font-semibold">Full Name</Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-purple-400 transition-colors" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10 text-white text-base focus:ring-purple-500/50 focus:border-purple-500/50 transition-all hover:bg-white/10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-sm font-semibold">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-purple-400 transition-colors" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10 text-white text-base focus:ring-purple-500/50 focus:border-purple-500/50 transition-all hover:bg-white/10"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    We'll never share your email with anyone else
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white text-sm font-semibold">Password</Label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-purple-400 transition-colors" />
                      <Input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 bg-white/5 border-white/10 text-white text-base focus:ring-purple-500/50 focus:border-purple-500/50 transition-all hover:bg-white/10"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-white text-sm font-semibold">Confirm Password</Label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 group-focus-within:text-purple-400 transition-colors" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10 bg-white/5 border-white/10 text-white text-base focus:ring-purple-500/50 focus:border-purple-500/50 transition-all hover:bg-white/10"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 -mt-1">
                  Password must be at least 8 characters and include a number and symbol
                </p>
                
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox 
                    id="terms" 
                    checked={agreeTerms} 
                    onCheckedChange={setAgreeTerms}
                    className="data-[state=checked]:bg-purple-500 border-purple-500/50 mt-0.5"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-300 leading-tight font-medium"
                  >
                    I agree to the{" "}
                    <button 
                      type="button"
                      className="text-purple-400 font-bold hover:text-purple-300 hover:underline transition-colors"
                    >
                      terms and conditions
                    </button>
                    {" "}and{" "}
                    <button 
                      type="button"
                      className="text-purple-400 font-bold hover:text-purple-300 hover:underline transition-colors"
                    >
                      privacy policy
                    </button>
                  </label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 text-base rounded-md transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.span 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                      Creating account...
                    </motion.span>
                  ) : (
                    <motion.span 
                      className="flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <UserPlus size={16} />
                      Create Account
                    </motion.span>
                  )}
                </Button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="mt-6"
            >
              <SocialLoginButtons 
                className="w-full" 
                closeModal={() => setIsOpen(false)}
                isRegister={true}
              />
            </motion.div>
            
            <DialogFooter className="mt-6 flex justify-center px-0">
              <p className="text-sm text-gray-300 text-center font-medium">
                Already have an account?{" "}
                <button 
                  onClick={onSwitchToLogin}
                  className="text-purple-400 font-bold hover:text-purple-300 hover:underline transition-colors"
                >
                  Sign in
                </button>
              </p>
            </DialogFooter>
          </div>
        </div>
      </CustomDialogContent>
    </Dialog>
  );
};

export default AuthModals; 