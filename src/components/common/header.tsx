'use client';

//hook
import { useAuth } from '@/hooks';

//model
import { Role } from '@/models';

//component
import {
  AdminHeader,
  CustomerHeader,
  MainHeader,
  OrganizerHeader
} from './header-group';

export function Header() {
  const { profile } = useAuth({
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    errorRetryCount: 0,
    errorRetryInterval: 0,
    keepPreviousData: false
  });

  return !profile ? (
    <MainHeader />
  ) : profile.role === Role.ADMIN ? (
    <AdminHeader />
  ) : profile.role === Role.CUSTOMER ? (
    <CustomerHeader />
  ) : profile.role === Role.ORGANIZER ? (
    <OrganizerHeader />
  ) : (
    <MainHeader />
  );
}
