"use client";

import { useEffect } from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import ProgressSteps from "@/components/ProgressSteps";
import { useCheckout } from "@/context/CheckoutContext";

export default function SuccessPage() {
  const { resetCheckout } = useCheckout();

  useEffect(() => {
    resetCheckout();
  }, [resetCheckout]);

  return (
    <PageShell>
      <ProgressSteps current="success" />

      <div className="mx-auto max-w-3xl rounded-[36px] border border-emerald-100 bg-white/90 p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
          ✅
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Order Completed
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Order Successful!</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600 md:text-base">
          Your order has been placed successfully. You will receive an order confirmation shortly.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Back to Home
        </Link>
      </div>
    </PageShell>
  );
}