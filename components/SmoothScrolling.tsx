"use client";
import React, { PropsWithChildren, ReactNode } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ({ children }: any) => {
  return (
    // @ts-ignore
    <ReactLenis options={{ duration: 2 }} root>
      {children}
    </ReactLenis>
  );
};

export default Lenis;
