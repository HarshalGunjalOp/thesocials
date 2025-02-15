import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-screen border-t mt-11 border-gray-400 bottom-0 backdrop-blur bg-background/95 supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-col justify-center items-center gap-4 px-8 py-8 md:flex-row md:items-center md:justify-between md:py-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <p className="text-sm text-foreground">© 2024 TheSocials™</p>
          <div className="flex items-center gap-2">
            <span className="hidden text-foreground md:inline-block">|</span>
            <Link
              href="mailto:hello@thesocials.com"
              className="text-sm text-foreground hover:text-primary"
            >
              hello@thesocials.com
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" aria-label="Follow us on Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://facebook.com"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://instagram.com"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://linkedin.com"
              aria-label="Follow us on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
