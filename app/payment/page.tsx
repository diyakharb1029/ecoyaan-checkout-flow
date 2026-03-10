"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PageShell from "@/components/PageShell";
import ProgressSteps from "@/components/ProgressSteps";
import OrderSummary from "@/components/OrderSummary";
import { useCheckout } from "@/context/CheckoutContext";

export default function PaymentPage() {
  const router = useRouter();
  const { cartData, shippingAddress, isHydrated } = useCheckout();

  const hasAddress = Object.values(shippingAddress).every((value) => value.trim() !== "");

  useEffect(() => {
    if (!isHydrated) return;

    if (!cartData) {
      router.replace("/");
      return;
    }

    if (!hasAddress) {
      router.replace("/checkout");
    }
  }, [isHydrated, cartData, hasAddress, router]);

  if (!isHydrated) {
    return (
      <PageShell>
        <div className="rounded-3xl bg-white/90 p-6 shadow-sm">Loading payment...</div>
      </PageShell>
    );
  }

  if (!cartData || !hasAddress) return null;

  const handlePay = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/success");
  };

  return (
    <PageShell>
      <section className="mb-6 rounded-[28px] border border-white/50 bg-white/75 p-5 shadow-[0_15px_60px_rgba(15,23,42,0.08)] backdrop-blur md:mb-8 md:rounded-[32px] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Final Confirmation
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Payment Method
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Review the order and shipping details before completing the payment simulation.
        </p>
      </section>

      <ProgressSteps current="payment" />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-[28px] border border-white/50 bg-white/85 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Shipping Address
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Delivery Information</h2>

            <div className="mt-5 grid gap-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2">
              <div>
                <p className="text-slate-500">Full Name</p>
                <p className="font-medium">{shippingAddress.fullName}</p>
              </div>
              <div>
                <p className="text-slate-500">Email</p>
                <p className="font-medium break-all">{shippingAddress.email}</p>
              </div>
              <div>
                <p className="text-slate-500">Phone Number</p>
                <p className="font-medium">{shippingAddress.phoneNumber}</p>
              </div>
              <div>
                <p className="text-slate-500">PIN Code</p>
                <p className="font-medium">{shippingAddress.pinCode}</p>
              </div>
              <div>
                <p className="text-slate-500">City</p>
                <p className="font-medium">{shippingAddress.city}</p>
              </div>
              <div>
                <p className="text-slate-500">State</p>
                <p className="font-medium">{shippingAddress.state}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/50 bg-white/85 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Simulated Payment
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Secure Payment</h2>
            <p className="mt-2 text-sm text-slate-600">
              Complete your purchase using the simulated secure payment for this demo checkout.
            </p>

            <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-900">
              Payment Method: Demo Secure Checkout
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => router.push("/checkout")}
                className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Edit Address
              </button>

              <button
                onClick={handlePay}
                className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Pay Securely
              </button>
            </div>
          </div>
        </div>

        <OrderSummary data={cartData} />
      </div>
    </PageShell>
  );
}