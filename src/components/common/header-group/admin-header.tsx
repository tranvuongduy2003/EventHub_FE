'use client';

//next
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

//store
import { useProfileStore } from '@/stores';
import { twMerge } from 'tailwind-merge';

//component
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '../../ui';

//hook
import { useAuth } from '@/hooks';

//icon
import { LuChevronDown, LuLogOut, LuUser } from 'react-icons/lu';

export function AdminHeader() {
  const router = useRouter();
  const { profile } = useProfileStore();
  const { logOut } = useAuth();

  return (
    <header className="px-8 h-14 flex items-center shadow-xs justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-[6px]">
        <Link href={'/'} className="flex items-center gap-[6px]">
          <div>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={43}
              height={60}
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
          <h2 className="text-lg font-bold leading-7">
            <span className="text-neutral-700">Ticket</span>
            <span className="text-primary-500">TVD</span>
          </h2>
        </Link>
        <NavigationMenu className="h-full">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink
                  className={twMerge(
                    'ease-linear transition-all bg-transparent hover:bg-slate-200 px-6 py-4 text-sm font-normal leading-6 text-neutral-600',
                    (router.pathname === '/dashboard' ||
                      router.pathname.includes('management')) &&
                      'font-bold border-b-4 border-primary-500 text-primary-500'
                  )}
                >
                  Quản lý
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={twMerge(
                    'ease-linear transition-all bg-transparent hover:bg-slate-200 px-6 py-4 text-sm font-normal leading-6 text-neutral-600',
                    router.pathname === '/' &&
                      'font-bold border-b-4 border-primary-500 text-primary-500'
                  )}
                >
                  Trang chủ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/event/search" legacyBehavior passHref>
                <NavigationMenuLink
                  className={twMerge(
                    'ease-linear transition-all bg-transparent hover:bg-slate-200 px-6 py-4 text-sm font-normal leading-6 text-neutral-600',
                    router.pathname === '/event/search' &&
                      'font-bold border-b-4 border-primary-500 text-primary-500'
                  )}
                >
                  Sự kiện
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* RIGHT */}

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src={profile?.avatar}
                suppressHydrationWarning
                style={{ objectFit: 'cover' }}
              />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <div>
              <h3
                className="text-sm leading-[22px] text-neutral-900"
                suppressHydrationWarning
              >
                {profile?.name}
              </h3>
            </div>
            <LuChevronDown className="text-xs text-neutral-500" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem
            className="cursor-pointer px-3 py-2"
            onClick={() => router.push('/profile')}
          >
            <LuUser className="mr-2 text-base" />
            <span className="text-base">Thông tin cá nhân</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer px-3 py-2"
            onClick={() => logOut()}
          >
            <LuLogOut className="mr-2 text-base" />
            <span className="text-base">Đăng xuất</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
