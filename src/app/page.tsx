import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, Zap, PieChart, Landmark, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Simple. Secure. Smart.
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
                Take Command of Your <span className="text-primary italic">Financial Future</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                Budget Buddy is the intuitive way to track every rupee. Stop wondering where your money went and start telling it where to go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-lg shadow-primary/25 group" asChild>
                  <Link href="/register">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" asChild>
                  <Link href="/login">Login to Account</Link>
                </Button>
              </div>
            </div>

            {/* Visual Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur opacity-20"></div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border bg-card shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/bb-preview/1200/675"
                  alt="Budget Buddy Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint="finance app"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              </div>
              
              {/* Floating Stat Card (Mock) */}
              <div className="absolute -bottom-6 -right-6 hidden lg:flex flex-col p-6 rounded-xl bg-card border shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Savings Goal</p>
                    <p className="text-xl font-bold">84% Achieved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[100px]"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="font-headline text-3xl font-bold sm:text-4xl mb-4 tracking-tight">Everything You Need to Thrive</h2>
              <div className="h-1.5 w-20 bg-primary rounded-full mb-6"></div>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Built for individuals who value simplicity and clarity in their financial management.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Secure & Private',
                  desc: 'Your financial data is yours alone. We use industry-standard encryption to keep your records safe.',
                  icon: ShieldCheck,
                  color: 'text-blue-500',
                  bg: 'bg-blue-500/10'
                },
                {
                  title: 'Visual Insights',
                  desc: 'Beautifully categorized transactions and balance tracking give you a bird\'s eye view of your spending.',
                  icon: BarChart3,
                  color: 'text-primary',
                  bg: 'bg-primary/10'
                },
                {
                  title: 'Instant Recording',
                  desc: 'Add transactions in seconds. Designed to be fast so you can record expenses the moment they happen.',
                  icon: Zap,
                  color: 'text-amber-500',
                  bg: 'bg-amber-500/10'
                },
                {
                  title: 'Spending Analysis',
                  desc: 'Identify patterns in your spending with detailed breakdowns across different categories.',
                  icon: PieChart,
                  color: 'text-purple-500',
                  bg: 'bg-purple-500/10'
                },
                {
                  title: 'Multi-Category',
                  desc: 'From Maintenance to Groceries, use flexible categories to organize your financial life.',
                  icon: Landmark,
                  color: 'text-emerald-500',
                  bg: 'bg-emerald-500/10'
                },
                {
                  title: 'Data Portability',
                  desc: 'Need your data elsewhere? Export all your transactions to CSV with a single click.',
                  icon: ArrowRight,
                  color: 'text-slate-500',
                  bg: 'bg-slate-500/10'
                },
              ].map((feature, idx) => (
                <div key={idx} className="group relative flex flex-col p-8 rounded-2xl border bg-card transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} ${feature.color}`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground shadow-2xl">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Ready to start tracking?</h2>
                <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto">
                  Join thousands of users who have transformed their relationship with money using Budget Buddy.
                </p>
                <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold shadow-xl hover:scale-105 transition-transform" asChild>
                  <Link href="/register">Create Your Free Account</Link>
                </Button>
              </div>
              
              {/* Decorative circles in CTA */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-headline text-xl font-bold text-primary">
              <Landmark className="h-6 w-6" />
              <span>Budget Buddy</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Budget Buddy. All rights reserved. Built for financial clarity.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
