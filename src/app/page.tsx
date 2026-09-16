"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      router.push("/home");
    }, 2200);
    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <main className="grid min-h-screen place-items-center bg-white">
      <Image
        src="/images/logo animation splash.svg"
        alt="AmeriList"
        width={300}
        height={300}
        priority
        className="animate-splash h-auto w-[220px] md:w-[300px]"
      />
    </main>
  );
}
