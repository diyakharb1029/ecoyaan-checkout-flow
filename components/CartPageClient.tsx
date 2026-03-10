"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CartItemCard from "@/components/CartItemCard";
import OrderSummary from "@/components/OrderSummary";
import ProgressSteps from "@/components/ProgressSteps";
import { useCheckout } from "@/context/CheckoutContext";
import { CartData } from "@/types";

export default function CartPageClient({ cartData }: { cartData: CartData }) {
  const router = useRouter();
  const { setCartData } = useCheckout();

  useEffect(() => {
    setCartData(cartData);
  }, [cartData, setCartData]);

  return (
    <>
      <section className="mb-6 rounded-[28px] border border-white/15 bg-gradient-to-br from-[#08140d] via-[#0c2417] to-[#1d6b47] px-5 py-6 text-white shadow-[0_20px_70px_rgba(15,23,42,0.18)] md:mb-8 md:rounded-[32px] md:px-10 md:py-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-200 sm:text-xs">
          Ecoyaan Checkout Flow
        </p>

        <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          A clean and responsive checkout experience for sustainable products
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-emerald-50 sm:text-base">
          A server-rendered checkout flow built with Next.js, demonstrating cart review, address collection, and a simulated payment step. 
        </p>
      </section>

      <ProgressSteps current="cart" />

      <div className="grid gap-8 lg:grid-cols-[1.45fr_0.75fr]">
        <div>
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Your Cart
            </p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">Order Review</h2>
          </div>

          <div className="space-y-4">
            {cartData.cartItems.map((item) => (
              <CartItemCard key={item.product_id} item={item} />
            ))}
          </div>
        </div>

        <OrderSummary
          data={cartData}
          buttonText="Proceed to Checkout"
          onButtonClick={() => router.push("/checkout")}
        />
      </div>
    </>
  );
}