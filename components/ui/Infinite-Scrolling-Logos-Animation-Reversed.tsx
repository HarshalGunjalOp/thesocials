"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CompanyLogoData = [
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg",
    alt: "Facebook",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg",
    alt: "Disney",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg",
    alt: "Airbnb",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg",
    alt: "Apple",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/spark.svg",
    alt: "Spark",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg",
    alt: "Samsung",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg",
    alt: "Quora",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg",
    alt: "Sass",
  },
];
export const InfiniteScrollingLogosAnimationReversed = () => {
  return (
    <div className="container overflow-x-hidden p-6 bg-black">
      <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: "-50%" }}
          animate={{ translateX: 0 }}
          className="flex flex-none gap-16 pr-16"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {CompanyLogoData.map(({ src, alt }) => (
                <Image
                  key={alt}
                  src={src}
                  alt={alt}
                  className="h-8 w-auto flex-none"
                  width={20}
                  height={20}
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
