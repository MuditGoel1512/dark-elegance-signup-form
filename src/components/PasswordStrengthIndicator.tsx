
import React, { useEffect, useState } from "react";

type PasswordStrength = "empty" | "weak" | "medium" | "strong";

interface PasswordStrengthIndicatorProps {
  password: string;
}

export default function PasswordStrengthIndicator({
  password,
}: PasswordStrengthIndicatorProps) {
  const [strength, setStrength] = useState<PasswordStrength>("empty");
  const [strengthText, setStrengthText] = useState("Password strength");

  useEffect(() => {
    if (!password) {
      setStrength("empty");
      setStrengthText("Password strength");
      return;
    }

    // Very simple password strength check for UI purposes only
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const isLongEnough = password.length >= 8;

    const passedChecks = [
      hasUppercase,
      hasLowercase,
      hasNumbers, 
      hasSpecial,
      isLongEnough
    ].filter(Boolean).length;

    if (passedChecks <= 2) {
      setStrength("weak");
      setStrengthText("Weak");
    } else if (passedChecks <= 4) {
      setStrength("medium");
      setStrengthText("Medium");
    } else {
      setStrength("strong");
      setStrengthText("Strong");
    }
  }, [password]);

  return (
    <div className="space-y-1">
      <div className="flex h-1 w-full space-x-1">
        <div
          className={`h-full w-1/3 rounded-full transition-all duration-300 ${
            strength !== "empty"
              ? "bg-red-500"
              : "bg-muted"
          }`}
        />
        <div
          className={`h-full w-1/3 rounded-full transition-all duration-300 ${
            strength === "medium" || strength === "strong"
              ? "bg-yellow-500"
              : "bg-muted"
          }`}
        />
        <div
          className={`h-full w-1/3 rounded-full transition-all duration-300 ${
            strength === "strong" ? "bg-green-500" : "bg-muted"
          }`}
        />
      </div>
      <p className="text-xs text-muted-foreground">{strengthText}</p>
    </div>
  );
}
