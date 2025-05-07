
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";
import SocialSignUp from "./SocialSignUp";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    // Mock form submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Account created successfully",
        description: "Welcome aboard!",
      });
    }, 1500);
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div 
          className={`space-y-2 animate-in transition-all duration-300 ${
            focusedField === 'email' ? 'scale-[1.02]' : ''
          }`} 
          style={{ "--index": 0 } as React.CSSProperties}
        >
          <Label htmlFor="email" className="text-sm font-medium text-blue-100">Email</Label>
          <div className="group relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              required
              className="bg-secondary/50 border-white/10 focus:border-blue-500 focus-visible:ring-blue-500/30 transition-all duration-300 pl-10"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
          </div>
        </div>

        <div 
          className={`space-y-2 animate-in transition-all duration-300 ${
            focusedField === 'password' ? 'scale-[1.02]' : ''
          }`} 
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Label htmlFor="password" className="text-sm font-medium text-blue-100">Password</Label>
          <div className="group relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
              required
              className="bg-secondary/50 border-white/10 focus:border-blue-500 focus-visible:ring-blue-500/30 transition-all duration-300 pl-10 pr-10"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-blue-400 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <PasswordStrengthIndicator password={formData.password} />
        </div>

        <div 
          className={`space-y-2 animate-in transition-all duration-300 ${
            focusedField === 'confirmPassword' ? 'scale-[1.02]' : ''
          }`} 
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-blue-100">Confirm Password</Label>
          <div className="group relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={() => handleFocus('confirmPassword')}
              onBlur={handleBlur}
              required
              className="bg-secondary/50 border-white/10 focus:border-blue-500 focus-visible:ring-blue-500/30 transition-all duration-300 pl-10 pr-10"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-blue-400 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full group animate-in bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300"
          disabled={isSubmitting}
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <>
              Create Account
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </form>
      
      <SocialSignUp />

      <p className="text-center text-sm text-muted-foreground mt-8 animate-in" style={{ "--index": 4 } as React.CSSProperties}>
        Already have an account?{" "}
        <a href="#" className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition-all">
          Sign in
        </a>
      </p>
    </div>
  );
}
