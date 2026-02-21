'use client';

import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Wallet, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex justify-center">
            <div className="p-4 rounded-2xl bg-primary/10 text-primary">
              <Wallet className="h-12 w-12" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-headline">
              Welcome to <span className="text-primary">Budget Buddy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
              The simplest way to track your daily expenses and manage your rupees with absolute clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button size="lg" className="h-14 text-lg font-bold group shadow-lg shadow-primary/20" asChild>
              <Link href="/register">
                Get Started <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 text-lg font-bold" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>Instant Tracking</span>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-8 border-t bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Budget Buddy. Track every rupee, build your future.
          </p>
        </div>
      </footer>
    </div>
  );
}
