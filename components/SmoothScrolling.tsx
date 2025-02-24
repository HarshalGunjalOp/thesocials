/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

const Lenis = ({ children }: any) => {
  return (
    // @ts-expect-error
    <ReactLenis options={{ duration: 2 }} root>
      {children}
    </ReactLenis>
  );
};

export default Lenis;
