"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      useAuthStore.setState({ user: JSON.parse(stored) });
    }
  }, []);

  return <>{children}</>;
}
