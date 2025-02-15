import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Phone, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function HelpBusinesses() {
	return (
		<section className="container px-4 py-12 mx-auto">
			<div className="grid gap-8 lg:grid-cols-3">
				{/* Left Column */}
				<div className="space-y-6">
					<h2 className="text-4xl font-bold leading-tight lg:text-5xl">
						We Help Businesses
					</h2>
					<p className="text-lg text-muted-foreground">
						create amazing content that amplifies their presence, strengthens customer
						connections, and drives measurable growth through tailored digital
						strategies.
					</p>
					<Button asChild className="hover:bg-black group  bg-blue-800 group">
						<Link href="/">
							{/* Default Icon */}
							<Phone className="h-6 w-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0 scale-100 group-hover:scale-90" />
							{/* Hover Icon */}
							<PhoneCall className="h-6 w-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100" />
							Book a call
						</Link>
					</Button>
				</div>

				{/* Middle Column - Logo Grid */}
				<div className="grid grid-cols-2 gap-4 lg:col-span-1">
					<div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
						<Image
							src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
							alt="Pepperfry"
							width={120}
							height={40}
							className="h-8 w-auto"
						/>
					</div>
					<div className="bg-[#e8fae8] rounded-lg p-6 flex items-center justify-center">
						<Image
							src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
							alt="SUPR Daily"
							width={120}
							height={40}
							className="h-8 w-auto"
						/>
					</div>
					<div className="bg-[#fff5f5] rounded-lg p-6 flex items-center justify-center">
						<Image
							src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
							alt="The Whole Truth"
							width={120}
							height={40}
							className="h-8 w-auto"
						/>
					</div>
					<div className="bg-[#f0f7ff] rounded-lg p-6 flex items-center justify-center">
						<Image
							src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
							alt="Nykaa"
							width={120}
							height={40}
							className="h-8 w-auto"
						/>
					</div>
					<div className="bg-[#fffff0] rounded-lg p-6 flex items-center justify-center">
						<Image
							src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
							alt="Caffeine"
							width={120}
							height={40}
							className="h-8 w-auto"
						/>
					</div>
					<div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
						<Image
							src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
							alt="99 Pancakes"
							width={120}
							height={40}
							className="h-8 w-auto"
						/>
					</div>
					<div className="bg-[#fff5f0] rounded-lg p-6 flex items-center justify-center col-span-2 lg:col-span-1">
						<Image
							src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
							alt="Jacobs"
							width={120}
							height={40}
							className="h-8 w-auto"
						/>
					</div>
				</div>

				{/* Right Column - Value Props */}
				<div className="space-y-4">
					<div className="flex items-center gap-3 p-4 rounded-full border border-gray-400 bg-white shadow-sm">
						<div className="flex-shrink-0">
							<Check className="w-5 h-5 text-blue-600" />
						</div>
						<span className="text-sm md:text-base">
							Refine Your Social Media Strategy
						</span>
					</div>
					<div className="flex items-center gap-3 p-4 rounded-full border border-gray-400 bg-white shadow-sm">
						<div className="flex-shrink-0">
							<Check className="w-5 h-5 text-blue-600" />
						</div>
						<span className="text-sm md:text-base">Maximize Audience Engagement</span>
					</div>
					<div className="flex items-center gap-3 p-4 rounded-full border border-gray-400 bg-white shadow-sm">
						<div className="flex-shrink-0">
							<Check className="w-5 h-5 text-blue-600" />
						</div>
						<span className="text-sm md:text-base">Drive Organic Traffic Growth</span>
					</div>
					<div className="flex items-center gap-3 p-4 rounded-full border border-gray-400 bg-white shadow-sm">
						<div className="flex-shrink-0">
							<Check className="w-5 h-5 text-blue-600" />
						</div>
						<span className="text-sm md:text-base">
							Increase Customer Loyalty & Lifetime Value
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
