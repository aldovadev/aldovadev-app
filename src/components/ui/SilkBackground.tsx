"use client";

import dynamic from "next/dynamic";
import type { SilkProps } from "@/components/ui/Silk";

const Silk = dynamic(() => import("@/components/ui/Silk"), { ssr: false });

export default function SilkBackground(props: SilkProps) {
  return <Silk {...props} />;
}
