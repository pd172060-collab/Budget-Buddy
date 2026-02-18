
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianRupee, TrendingUp, TrendingDown, Wallet } from 'lucide-react';

interface SummaryProps {
  income: number;
  expense: number;
}

export function DashboardSummary({ income, expense }: SummaryProps) {
  const balance = income - expense;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-primary text-primary-foreground">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          <Wallet className="h-4 w-4 opacity-70" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold flex items-center">
            <IndianRupee className="h-5 w-5 mr-1" />
            {balance.toLocaleString('en-IN')}
          </div>
          <p className="text-xs opacity-70 mt-1">Updated just now</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold flex items-center">
            <IndianRupee className="h-5 w-5 mr-1" />
            {income.toLocaleString('en-IN')}
          </div>
          <p className="text-xs text-muted-foreground mt-1 text-green-500">+ Credits added</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
          <TrendingDown className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold flex items-center">
            <IndianRupee className="h-5 w-5 mr-1" />
            {expense.toLocaleString('en-IN')}
          </div>
          <p className="text-xs text-muted-foreground mt-1 text-red-500">- Debits processed</p>
        </CardContent>
      </Card>
    </div>
  );
}
