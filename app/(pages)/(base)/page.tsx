'use client'

import Auth from "@/app/components/Auth";
import { userStore } from "@/app/stores/user-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (userStore.loadTokenFormStorage()) {
      router.push('/projects');
    }
  }, [])

  return (
    <>
      <Auth />
    </>

  );
}
