
import React from "react";
import SignUpForm from "@/components/SignUpForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-radial from-blue-950/50 to-background p-4">
      <div className="w-full max-w-md relative">
        {/* Background elements */}
        <div className="absolute -z-10 inset-0 bg-auth-gradient rounded-3xl blur-[100px]" />
        
        {/* Animated background elements */}
        <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/5 animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute -z-10 -bottom-16 -left-16 w-48 h-48 rounded-full bg-blue-500/10 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute -z-10 top-1/4 -left-10 w-32 h-32 rounded-full bg-cyan-500/5 animate-float" style={{ animationDelay: "4s" }}></div>
        
        <div className="glass rounded-3xl p-8 sm:p-10 shadow-xl backdrop-blur-xl relative overflow-hidden animate-fade-in">
          {/* Subtle decorative elements */}
          <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-soft" />
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 right-0 w-full h-32 shimmer opacity-20" />
          
          <div className="relative z-10 space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gradient">Create an account</h1>
              <p className="text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>
            
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
