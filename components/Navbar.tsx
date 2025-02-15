"use client";

import { Menu, Zap, Phone, PhoneCall } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container flex h-20 items-center mx-auto">
        {/* Logo - visible on all screens */}
        <Link href="/" className="flex items-center gap-2 ml-8">
          <Zap className="h-6 w-6" />
          <span className="font-bold">TheSocials</span>
        </Link>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-8">
          <Link
            href="#impact"
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Our Impact
          </Link>
          <Link
            href="#work"
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Our Work
          </Link>
          <Link
            href="#why"
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Why TheSocials
          </Link>
        </div>

        {/* Desktop CTA Button - hidden on mobile */}
        <div className="hidden lg:flex lg:justify-end">
          <Button asChild className="hover:bg-black group  bg-blue-800 group">
            <Link href="/">
              {/* Default Icon */}
              <Phone className="h-6 w-6  transition-opacity duration-300 opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-90" />
              {/* Hover Icon */}
              <PhoneCall className="h-6 w-6  transition-opacity duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100" />
              Book a call
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation - visible only on mobile */}
        <div className="flex flex-1 justify-end lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden mr-8">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-6">
                <Link href="#impact" className="text-lg font-semibold">
                  Our Impact
                </Link>
                <Link
                  href="#work"
                  className="text-lg font-semibold transition-colors hover:text-primary"
                >
                  Our Work
                </Link>
                <Link
                  href="#why"
                  className="text-lg font-semibold transition-colors hover:text-primary"
                >
                  Why TheSocials
                </Link>
                <Button asChild className="hover:bg-black bg-blue-800 group">
                  <Link href="/">
                    <PhoneCall className="h-6 w-6" />
                    Book a call
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
