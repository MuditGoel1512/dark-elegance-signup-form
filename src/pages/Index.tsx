
import React from "react";
import SignUpForm from "@/components/SignUpForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-radial from-zinc-800 to-background p-4">
      <div className="w-full max-w-md relative">
        {/* Background glow effect */}
        <div className="absolute -z-10 inset-0 bg-auth-gradient rounded-3xl blur-[100px]" />
        
        <div className="glass rounded-3xl p-8 sm:p-10 shadow-xl backdrop-blur-xl relative overflow-hidden animate-fade-in">
          {/* Subtle decorative element */}
          <div className="absolute -right-16 -top-16 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-accent/5 rounded-full blur-xl" />
          
          <div className="relative z-10 space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
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
