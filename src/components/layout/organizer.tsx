'use client';
import { useLayoutEffect } from 'react';

//next
import Router from 'next/router';

//hook
import { useAuth } from '@/hooks';

//model
import { LayoutProps, Role } from '@/models';

//component
import { Footer, Header } from '../common';

export function OrganizerLayout({ children }: LayoutProps) {
  const { profile, isLoading } = useAuth();

  // useLayoutEffect(() => {
  //   if (!isLoading && (!profile || profile.role !== Role.ORGANIZER)) {
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
