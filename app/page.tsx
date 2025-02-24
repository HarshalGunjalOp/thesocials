import HelpBusinesses from "@/components/HelpBusinesses";
import { OurImpact } from "@/components/Impact";
import { Button } from "@/components/ui/button";
import { InfiniteScrollingLogosAnimation } from "@/components/ui/Infinite-Scrolling-Logos-Animation";
import { InfiniteScrollingLogosAnimationReversed } from "@/components/ui/Infinite-Scrolling-Logos-Animation-Reversed";
import { Phone, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="pt-[4rem] sm:tracking-wide text-[1.4rem] max-w-[300px] sm:max-w-[600px] md:max-w-[700px] sm:text-[3rem]/[3.5rem] font-bold text-center">
        Create World Class Content{" "}
        <span className="text-blue-800">For Your Brand!</span>
      </h1>
      <Image src="sem-border-bg.svg" alt="" width={150} height={270} />
      <p className="py-7 text-[0.8rem] max-w-[340px] sm:text-[1.2rem] sm:max-w-[600px] md:text-lg text-center tracking-wide">
        Great brands entertain, inspire, and educate on social media. Focus on
        your audience, not your product.
      </p>
      <div className="mb-[100px]">
        <Button asChild className="w-[200px] h-[60px] hover:bg-black group bg-blue-800">
          <Link href="/">
							{/* Default Icon */}
							<Phone className="h-6 w-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-90" />
							{/* Hover Icon */}
							<PhoneCall className="h-6 w-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100" />
							Book a call
						</Link>
        </Button>
      </div>

      <h1 className="pt-[4rem] sm:tracking-wide text-xl max-w-[300px] sm:max-w-[600px] md:max-w-[700px] sm:text-3xl font-bold text-center mb-10">
        We Are Trusted By <span className="text-blue-800">1200+</span> Brands
      </h1>
      <InfiniteScrollingLogosAnimation />
      <InfiniteScrollingLogosAnimationReversed />
      <OurImpact />
      <HelpBusinesses />
    </main>
  );
}
