
"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowRight } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Password Strength Types
type PasswordStrength = "empty" | "weak" | "medium" | "strong"

interface PasswordStrengthIndicatorProps {
  password: string
}

// PasswordStrengthIndicator Component
function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const [strength, setStrength] = useState<PasswordStrength>("empty")
  const [strengthText, setStrengthText] = useState("Password strength")

  useEffect(() => {
    if (!password) {
      setStrength("empty")
      setStrengthText("Password strength")
      return
    }

    // Very simple password strength check for UI purposes only
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumbers = /[0-9]/.test(password)
    const hasSpecial = /[^A-Za-z0-9]/.test(password)
    const isLongEnough = password.length >= 8

    const passedChecks = [hasUppercase, hasLowercase, hasNumbers, hasSpecial, isLongEnough].filter(Boolean).length

    if (passedChecks <= 2) {
      setStrength("weak")
      setStrengthText("Weak")
    } else if (passedChecks <= 4) {
      setStrength("medium")
      setStrengthText("Medium")
    } else {
      setStrength("strong")
      setStrengthText("Strong")
    }
  }, [password])

  return (
    <div className="space-y-1">
      <div className="flex h-1 w-full space-x-1">
        <div
          className={`h-full w-1/3 rounded-full transition-all duration-500 ${
            strength !== "empty" ? "bg-red-500" : "bg-muted"
          }`}
        />
        <div
          className={`h-full w-1/3 rounded-full transition-all duration-500 ${
            strength === "medium" || strength === "strong" ? "bg-yellow-500" : "bg-muted"
          }`}
        />
        <div
          className={`h-full w-1/3 rounded-full transition-all duration-500 ${
            strength === "strong" ? "bg-green-500" : "bg-muted"
          }`}
        />
      </div>
      <p className="text-xs text-muted-foreground">{strengthText}</p>
    </div>
  )
}

// SocialSignUp Component
function SocialSignUp() {
  return (
    <div className="flex flex-col gap-3 w-full animate-in" style={{ "--index": 3 } as React.CSSProperties}>
      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t border-muted"></div>
        <span className="flex-shrink mx-3 text-xs text-muted-foreground">OR CONTINUE WITH</span>
        <div className="flex-grow border-t border-muted"></div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="bg-secondary/30 hover:bg-secondary/80 border-white/10 hover:border-blue-500/50 transition-all duration-300"
          onClick={() => {}}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
            <path fill="none" d="M1 1h22v22H1z" />
          </svg>
          Google
        </Button>

        <Button
          variant="outline"
          className="bg-secondary/30 hover:bg-secondary/80 border-white/10 hover:border-blue-500/50 transition-all duration-300"
          onClick={() => {}}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
            />
          </svg>
          GitHub
        </Button>
      </div>
    </div>
  )
}

// Main SignUpForm Component
export function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match",
        variant: "destructive",
      })
      return
    }

    // Mock form submission
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Account created successfully",
        description: "Welcome aboard!",
      })
    }, 1500)
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          className={`space-y-2 animate-in transition-all duration-300 ${
            focusedField === "email" ? "scale-[1.02]" : ""
          }`}
          style={{ "--index": 0 } as React.CSSProperties}
        >
          <Label htmlFor="email" className="text-sm font-medium text-blue-100">
            Email
          </Label>
          <div className="group relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              required
              className="bg-secondary/50 border-white/10 focus:border-blue-500 focus-visible:ring-blue-500/30 transition-all duration-300 pl-10 text-white placeholder:text-gray-400"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-blue-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className={`space-y-2 animate-in transition-all duration-300 ${
            focusedField === "password" ? "scale-[1.02]" : ""
          }`}
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Label htmlFor="password" className="text-sm font-medium text-blue-100">
            Password
          </Label>
          <div className="group relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => handleFocus("password")}
              onBlur={handleBlur}
              required
              className="bg-secondary/50 border-white/10 focus:border-blue-500 focus-visible:ring-blue-500/30 transition-all duration-300 pl-10 pr-10 text-white placeholder:text-gray-400"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-blue-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lock"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
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
            focusedField === "confirmPassword" ? "scale-[1.02]" : ""
          }`}
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Label htmlFor="confirmPassword" className="text-sm font-medium text-blue-100">
            Confirm Password
          </Label>
          <div className="group relative">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={() => handleFocus("confirmPassword")}
              onBlur={handleBlur}
              required
              className="bg-secondary/50 border-white/10 focus:border-blue-500 focus-visible:ring-blue-500/30 transition-all duration-300 pl-10 pr-10 text-white placeholder:text-gray-400"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-hover:text-blue-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lock"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
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

      <p
        className="text-center text-sm text-muted-foreground mt-8 animate-in"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        Already have an account?{" "}
        <a href="#" className="text-blue-400 hover:text-blue-300 underline-offset-4 hover:underline transition-all">
          Sign in
        </a>
      </p>
    </div>
  )
}
