"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MobileContactButton() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center md:hidden">
      <Button
        asChild
        className="w-[88%] animate-pulse rounded-2xl shadow-2xl shadow-primary/40"
        variant="secondary"
      >
        <Link href="/contact">
          <PhoneCall className="mr-2 size-4" />
          Contact Us
        </Link>
      </Button>
    </div>
  );
}

