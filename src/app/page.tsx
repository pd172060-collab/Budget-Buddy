
import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6">
                <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
                  Master Your Money with <span className="text-primary">Budget Buddy</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-[600px]">
                  Take control of your financial life with Budget Buddy. Input transactions, track spending patterns, and save more with our intuitive and secure dashboard.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Button size="lg" className="h-12 px-8 font-semibold" asChild>
                    <Link href="/register">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                    <Link href="/login">Login to Account</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border bg-card">
                <Image
                  src="https://picsum.photos/seed/rupeetrack/800/800"
                  alt="Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                  data-ai-hint="finance dashboard"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl font-bold sm:text-4xl">Why Choose Budget Buddy?</h2>
              <p className="mt-4 text-muted-foreground">Everything you need to manage your personal finances effectively.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Secure & Private',
                  desc: 'Your financial data is yours. We use bank-grade security to keep your information safe.',
                  icon: ShieldCheck,
                },
                {
                  title: 'Real-time Insights',
                  desc: 'Visualize your spending habits with interactive charts and categorizations.',
                  icon: BarChart3,
                },
                {
                  title: 'Blazing Fast',
                  desc: 'Add transactions on the go with our lightning-fast input system designed for efficiency.',
                  icon: Zap,
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col p-8 rounded-xl border bg-card transition-all hover:shadow-lg">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Budget Buddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
