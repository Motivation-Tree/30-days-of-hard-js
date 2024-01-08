"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};

export default Providers;
