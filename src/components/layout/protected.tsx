'use client';
import { useLayoutEffect } from 'react';

//next
import Router from 'next/router';

//model
import { LayoutProps } from '@/models';

//component
import { Footer, Header } from '../common';

//hook
import { useAuth } from '@/hooks';

export function ProtectedLayout({ children }: LayoutProps) {
  const { profile, isLoading } = useAuth();

  // useLayoutEffect(() => {
  //   if (!isLoading && !profile) {
  //     Router.push('/auth/login');
  //   }
  // }, [isLoading, profile]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
