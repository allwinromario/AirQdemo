import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, LogIn, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundStars from "@/components/BackgroundStars";

const Login = () => {
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
      // In a real app, you would handle authentication here
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-space-dark to-black flex items-center justify-center p-4 sm:p-6 md:p-8">
      <BackgroundStars />
      
      <Link 
        to="/" 
        className="absolute top-6 left-6 text-white flex items-center gap-2 hover:text-space-blue transition-colors z-10"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back to Home</span>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <Card className="backdrop-blur-xl bg-black/40 border border-white/10 shadow-lg shadow-blue-900/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 z-0"></div>
          <CardHeader className="space-y-1 relative z-10">
            <CardTitle className="text-2xl md:text-3xl font-bold text-white text-center">Welcome back</CardTitle>
            <CardDescription className="text-gray-400 text-center pb-2">
              Sign in to your AirQ account
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-space-dark/50 border-space-blue/30 text-white focus:ring-space-blue focus:border-space-blue"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white text-sm font-medium">Password</Label>
                  <Link to="/forgot-password" className="text-xs text-space-blue hover:text-space-blue/90 hover:underline transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-space-dark/50 border-space-blue/30 text-white focus:ring-space-blue focus:border-space-blue"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 rounded-md transition-all"
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
          </CardContent>
          <CardFooter className="relative z-10 flex justify-center">
            <p className="text-sm text-gray-400 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-space-blue font-medium hover:text-space-blue/90 hover:underline transition-colors">
                Register
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login; 