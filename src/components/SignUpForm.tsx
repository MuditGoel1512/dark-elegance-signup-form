
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

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2 animate-in" style={{ "--index": 0 } as React.CSSProperties}>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-secondary/30 border-secondary focus:border-accent focus-visible:ring-accent/20 transition-all duration-300"
          />
        </div>

        <div className="space-y-2 animate-in" style={{ "--index": 1 } as React.CSSProperties}>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-secondary/30 border-secondary focus:border-accent focus-visible:ring-accent/20 transition-all duration-300 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <PasswordStrengthIndicator password={formData.password} />
        </div>

        <div className="space-y-2 animate-in" style={{ "--index": 2 } as React.CSSProperties}>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="bg-secondary/30 border-secondary focus:border-accent focus-visible:ring-accent/20 transition-all duration-300 pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full group animate-in bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 transition-all duration-300"
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
        <a href="#" className="text-accent hover:text-accent/80 underline-offset-4 hover:underline transition-all">
          Sign in
        </a>
      </p>
    </div>
  );
}
