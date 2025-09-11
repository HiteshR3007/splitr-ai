"use client";

import React from 'react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { useStoreUser } from '@/hooks/use-store-user';
import { BarLoader } from 'react-spinners';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Authenticated, Unauthenticated } from 'convex/react';
import { Button } from './ui/button';
import { LayoutDashboard } from 'lucide-react';

const Header = () => {

  const{ isLoading } = useStoreUser();
  const path = usePathname();


  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-150 supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src = {"/logos/logo.png"}
            alt='Splitr'
            width={200}
            height={60}
            className='h-11 w-auto object-contain'
          />
        </Link>  

        {path ==="/" && (
          <div >
            <Link
              href="#features"
              className='text-sm font-medium hover:text-blue-950 transition'
            >
              Features
            </Link>

            <Link
              href="#HIW"
              className='text-sm font-medium hover:text-blue-950 transition'
            >
              How it Works
            </Link>

          </div>
        )}

        <div className='flex items-center gap-3' >
        <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 hover:text-blue-950 hover:border-blue-950 transition"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant="ghost">Sign In</Button>
            </SignInButton>

            <SignUpButton>
              <Button className="bg-blue-950 hover:bg-blue-950 border-none">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>

      </nav>

      {isLoading && <BarLoader width ={"100%"} color='red'/> }
    </header>
  )
}

export default Header