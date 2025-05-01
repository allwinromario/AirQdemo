import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, UserPlus, Mail, Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import BackgroundStars from "@/components/BackgroundStars";

const Register = () => {
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
        description: "Welcome to AirQ! Your account has been created."
      });
      // In a real app, you would handle account creation here
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
        className="w-full max-w-md z-10 my-8"
      >
        <Card className="backdrop-blur-xl bg-black/40 border border-white/10 shadow-lg shadow-blue-900/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 z-0"></div>
          <CardHeader className="space-y-1 relative z-10">
            <CardTitle className="text-2xl md:text-3xl font-bold text-white text-center">Create an account</CardTitle>
            <CardDescription className="text-gray-400 text-center pb-2">
              Sign up for AirQ to start monitoring air quality
            </CardDescription>
          </CardHeader>
          <CardContent className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white text-sm font-medium">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 bg-space-dark/50 border-space-blue/30 text-white focus:ring-space-blue focus:border-space-blue"
                  />
                </div>
              </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white text-sm font-medium">Password</Label>
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
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white text-sm font-medium">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10 bg-space-dark/50 border-space-blue/30 text-white focus:ring-space-blue focus:border-space-blue"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox 
                  id="terms" 
                  checked={agreeTerms} 
                  onCheckedChange={setAgreeTerms}
                  className="data-[state=checked]:bg-space-blue border-space-blue/50"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link to="/terms" className="text-space-blue hover:text-space-blue/90 hover:underline transition-colors">
                    terms and conditions
                  </Link>
                </label>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 rounded-md transition-all mt-2"
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
          </CardContent>
          <CardFooter className="relative z-10 flex justify-center">
            <p className="text-sm text-gray-400 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-space-blue font-medium hover:text-space-blue/90 hover:underline transition-colors">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register; 