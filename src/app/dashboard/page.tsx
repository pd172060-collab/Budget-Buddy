'use client';

import { useMemo } from 'react';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { useFirestore, useUser, useCollection, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { DashboardSummary } from '@/components/dashboard-summary';
import { TransactionForm } from '@/components/transaction-form';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Loader2, Download } from 'lucide-react';

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const db = useFirestore();
  const router = useRouter();

  const transactionsQuery = useMemoFirebase(() => {
    if (!db || !user) return null;
    return query(
      collection(db, 'users', user.uid, 'transactions'),
      orderBy('transactionDate', 'desc'),
      limit(50)
    );
  }, [db, user]);

  const { data: transactions, isLoading: isTransactionsLoading } = useCollection(transactionsQuery);

  // Calculate totals for the summary cards
  const totals = useMemo(() => {
    if (!transactions) return { income: 0, expense: 0 };
    return transactions.reduce((acc, t) => {
      if (t.type === 'income') acc.income += t.amount;
      else acc.expense += t.amount;
      return acc;
    }, { income: 0, expense: 0 });
  }, [transactions]);

  // Calculate running balance for each transaction in the current list
  const transactionsWithBalance = useMemo(() => {
    if (!transactions) return [];
    
    // To calculate running balance, we process from oldest to newest
    const sortedOldestFirst = [...transactions].sort((a, b) => 
      new Date(a.transactionDate).getTime() - new Date(b.transactionDate).getTime()
    );
    
    let runningTotal = 0;
    const processed = sortedOldestFirst.map((t) => {
      if (t.type === 'income') runningTotal += t.amount;
      else runningTotal -= t.amount;
      return { ...t, runningBalance: runningTotal };
    });
    
    // Return to newest first for display
    return processed.reverse();
  }, [transactions]);

  const handleDownloadCSV = () => {
    if (!transactions || transactions.length === 0) return;

    const headers = ['Date', 'Description', 'Category', 'Type', 'Amount', 'Running Balance'];
    const csvContent = [
      headers.join(','),
      ...transactionsWithBalance.map((t) => [
        t.transactionDate ? format(new Date(t.transactionDate), 'yyyy-MM-dd HH:mm:ss') : '',
        `"${t.description.replace(/"/g, '""')}"`,
        t.categoryId,
        t.type,
        t.amount,
        t.runningBalance,
      ].join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `budget_buddy_transactions_${format(new Date(), 'yyyy-MM-dd')}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isUserLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Checking authentication...</p>
      </div>
    );
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold font-headline text-primary">Financial Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here&apos;s your financial overview.</p>
          </div>

          <DashboardSummary income={totals.income} expense={totals.expense} />

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-xl font-bold font-headline">Quick Add</h2>
              <TransactionForm />
            </div>

            <div className="lg:col-span-3">
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                  <CardTitle>Recent Transactions</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleDownloadCSV}
                    disabled={!transactions || transactions.length === 0}
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download CSV
                  </Button>
                </CardHeader>
                <CardContent>
                  {isTransactionsLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead className="text-right">Amount</TableHead>
                          <TableHead className="text-right">Balance</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {!transactionsWithBalance || transactionsWithBalance.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                              No transactions found. Add one to get started!
                            </TableCell>
                          </TableRow>
                        ) : (
                          transactionsWithBalance.map((t) => (
                            <TableRow key={t.id}>
                              <TableCell className="text-xs">
                                {t.transactionDate ? format(new Date(t.transactionDate), 'MMM dd') : 'Pending'}
                              </TableCell>
                              <TableCell className="font-medium max-w-[120px] truncate">{t.description}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className="capitalize text-[10px] px-1.5 py-0">
                                  {t.categoryId}
                                </Badge>
                              </TableCell>
                              <TableCell className={`text-right font-bold ${t.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
                                <span className="flex items-center justify-end">
                                  {t.type === 'income' ? '+' : '-'}₹{t.amount.toLocaleString('en-IN')}
                                </span>
                              </TableCell>
                              <TableCell className="text-right font-medium text-muted-foreground">
                                <span className="flex items-center justify-end text-xs">
                                  ₹{t.runningBalance.toLocaleString('en-IN')}
                                </span>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
