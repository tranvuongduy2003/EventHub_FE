'use client';

//next
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="px-32 py-8 bg-neutral-900 flex justify-between items-center text-white">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start justify-between">
          <div className="flex items-center gap-2">
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
          <p className="text-gray500 text-sm max-w-80">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex items-center gap-3">
            <button>
              <p className="text-white text-sm font-semibold">(219) 555-014</p>
              <div className="w-full bg-primary h-[2px]" />
            </button>
            <span className="text-gray500">or</span>
            <button>
              <p className="text-white  text-sm font-semibold">
                eventhub @gm.uit.edu.vn
              </p>
              <div className="w-full bg-primary h-[2px]" />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <div className="flex flex-col items-start text-gray500 gap-1">
            <h1 className="text-special pb-2 font-semibold">My Account</h1>
            <p className="hover:underline hover:cursor-pointer">My Account</p>
            <p className="hover:underline hover:cursor-pointer">
              Order History
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Shopping Cart
            </p>
            <p className="hover:underline hover:cursor-pointer">Wishlist</p>
          </div>
          <div className="flex flex-col items-start text-gray500 gap-1">
            <h1 className="text-special pb-2 font-semibold">Helps</h1>
            <p className="hover:underline hover:cursor-pointer">Contact</p>
            <p className="hover:underline hover:cursor-pointer">Faqs</p>
            <p className="hover:underline hover:cursor-pointer">
              Terms & Condition
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col items-start text-gray500 gap-1">
            <h1 className="text-special pb-2 font-semibold">Proxy</h1>
            <p className="hover:underline hover:cursor-pointer">About</p>
            <p className="hover:underline hover:cursor-pointer">Shop</p>
            <p className="hover:underline hover:cursor-pointer">Product</p>
            <p className="hover:underline hover:cursor-pointer">Track Order</p>
          </div>
          <div className="flex flex-col items-start text-gray500 gap-1">
            <h1 className="text-special pb-2 font-semibold">Categories</h1>
            <p className="hover:underline hover:cursor-pointer">
              Fruit & Vegetables
            </p>
            <p className="hover:underline hover:cursor-pointer">Meat & Fish</p>
            <p className="hover:underline hover:cursor-pointer">
              Break & Bakery
            </p>
            <p className="hover:underline hover:cursor-pointer">
              Beauty & Health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
