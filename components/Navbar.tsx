"use client";

import { Menu, Zap, Phone } from "lucide-react";
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
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto">
        {/* Logo - visible on all screens */}
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Zap className="h-6 w-6" />
          <span className="font-bold">TheSocials</span>
        </Link>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-8">
          <Link
            href="/impact"
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Our Impact
          </Link>
          <Link
            href="/work"
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Our Work
          </Link>
          <Link
            href="/why"
            className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
          >
            Why TheSocials
          </Link>
        </div>

        {/* Desktop CTA Button - hidden on mobile */}
        <div className="hidden lg:flex lg:justify-end">
          <Button asChild>
            <Link href="/">
              <Phone className="h-6 w-6" /> Book a call
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation - visible only on mobile */}
        <div className="flex flex-1 justify-end lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-6">
                <Link
                  href="/impact"
                  className="text-lg font-semibold transition-colors hover:text-primary"
                >
                  Our Impact
                </Link>
                <Link
                  href="/work"
                  className="text-lg font-semibold transition-colors hover:text-primary"
                >
                  Our Work
                </Link>
                <Link
                  href="/why"
                  className="text-lg font-semibold transition-colors hover:text-primary"
                >
                  Why TheSocials
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/"><Phone className="h-6 w-6" /> Book a call</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
