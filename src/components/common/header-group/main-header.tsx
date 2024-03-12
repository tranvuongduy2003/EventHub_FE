'use client';

//next
import Image from 'next/image';
import Link from 'next/link';

//component
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../ui';

export function MainHeader() {
  return (
    <header className="px-8 h-14 flex items-center shadow-xs justify-between">
      {/* LEFT */}
      <Link href={'/'} className="flex items-center gap-[6px]">
        <div>
          <Image
            src="/images/logo-text.png"
            alt="Logo"
            width={140}
            height={60}
            style={{
              objectFit: 'cover'
            }}
          />
        </div>
      </Link>
      <div className="flex items-center gap-10 ">
        <div className="border-neutral-500 text-neutral-400 w-40">
          <Select defaultValue="vi">
            <SelectTrigger className="w-[180px] bg-primary-300 text-white">
              <SelectValue placeholder="Ngôn ngữ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vi">Tiếng Việt</SelectItem>
              <SelectItem value="en">Tiếng Anh</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-3">
          <Link href={'/auth/signup'}>
            <Button
              type="button"
              className="bg-primary-100 hover:bg-primary-200 text-primary-500"
            >
              Đăng ký
            </Button>
          </Link>
          <Link href={'/auth/login'}>
            <Button type="button" className="text-white">
              Đăng nhập
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
