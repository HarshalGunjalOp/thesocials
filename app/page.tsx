import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="pt-[4rem] sm:tracking-wide text-[1.4rem] max-w-[300px] sm:max-w-[600px] md:max-w-[700px] sm:text-[3rem]/[3.5rem] font-bold text-center">Create World Class Content <span className="text-blue-800">For Your Brand!</span></h1>
      <img src="sem-border-bg.svg" alt="" className="w-[150px] sm:w-[270px]" />
      <p className="py-7 text-[0.8rem] max-w-[340px] sm:text-[1.2rem] sm:max-w-[600px] md:text-lg text-center tracking-wide" >Great brands entertain, inspire, and educate on social media. Focus on your audience, not your product.</p>
      <div className="">
          <Button asChild>
            <Link href="/">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8" /> Book a call
            </Link>
          </Button>
        </div>
    </main>
  );
}
