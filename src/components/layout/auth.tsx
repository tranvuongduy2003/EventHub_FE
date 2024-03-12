'use client';

import { useEffect } from 'react';

//next
import Router from 'next/router';

//hook
import { useAuth } from '@/hooks';

//model
import { LayoutProps, Role } from '@/models';

export function AuthLayout({ children }: LayoutProps) {
  const { profile, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && profile) {
      if (profile.role === Role.ADMIN) {
        Router.push('/dashboard');
      } else if (profile.role === Role.CUSTOMER) {
        Router.push('/explore');
      } else {
        Router.push('/');
      }
    }
  }, [isLoading, profile]);

  return <>{children}</>;
}
