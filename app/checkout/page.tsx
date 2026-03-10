"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import PageShell from "@/components/PageShell";
import ProgressSteps from "@/components/ProgressSteps";
import { useCheckout } from "@/context/CheckoutContext";

type Errors = {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  pinCode?: string;
  city?: string;
  state?: string;
};

export default function CheckoutPage() {
  const router = useRouter();
  const { shippingAddress, setShippingAddress, cartData, isHydrated } = useCheckout();

  const [form, setForm] = useState(shippingAddress);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    setForm(shippingAddress);
  }, [shippingAddress]);

  useEffect(() => {
    if (isHydrated && !cartData) {
      router.replace("/");
    }
  }, [isHydrated, cartData, router]);

  const isFilled = useMemo(
    () => Object.values(form).every((value) => value.trim() !== ""),
    [form]
  );

  const validate = () => {
    const nextErrors: Errors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Full name is required";

    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    if (!form.phoneNumber.trim()) {
      nextErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phoneNumber)) {
      nextErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!form.pinCode.trim()) {
      nextErrors.pinCode = "PIN Code is required";
    } else if (!/^\d{6}$/.test(form.pinCode)) {
      nextErrors.pinCode = "PIN Code must be 6 digits";
    }

    if (!form.city.trim()) nextErrors.city = "City is required";
    if (!form.state.trim()) nextErrors.state = "State is required";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setShippingAddress(form);
    router.push("/payment");
  };

  if (!isHydrated) {
    return (
      <PageShell>
        <div className="rounded-3xl bg-white/90 p-6 shadow-sm">Loading checkout...</div>
      </PageShell>
    );
  }

  if (!cartData) return null;

  const inputClass =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-emerald-500";

  return (
    <PageShell>
      <section className="mb-6 rounded-[28px] border border-white/50 bg-white/75 p-5 shadow-[0_15px_60px_rgba(15,23,42,0.08)] backdrop-blur md:mb-8 md:rounded-[32px] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
          Delivery Details
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Shipping Address
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Enter your delivery details to continue to payment.
        </p>
      </section>

      <ProgressSteps current="shipping" />

      <div className="mx-auto max-w-3xl rounded-[28px] border border-white/50 bg-white/85 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur md:rounded-[32px] md:p-8">
        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input
              className={inputClass}
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              placeholder="Diya Kharb"
            />
            {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              className={inputClass}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">Phone Number</label>
            <input
              className={inputClass}
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({
                  ...form,
                  phoneNumber: e.target.value.replace(/\D/g, ""),
                })
              }
              placeholder="9876543210"
              maxLength={10}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">PIN Code</label>
            <input
              className={inputClass}
              value={form.pinCode}
              onChange={(e) =>
                setForm({
                  ...form,
                  pinCode: e.target.value.replace(/\D/g, ""),
                })
              }
              placeholder="248001"
              maxLength={6}
            />
            {errors.pinCode && <p className="mt-1 text-xs text-red-500">{errors.pinCode}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">City</label>
            <input
              className={inputClass}
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              placeholder="Dehradun"
            />
            {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium text-slate-700">State</label>
            <input
              className={inputClass}
              value={form.state}
              onChange={(e) => setForm({ ...form, state: e.target.value })}
              placeholder="Uttarakhand"
            />
            {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state}</p>}
          </div>

          <div className="md:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back to Cart
            </button>

            <button
              type="submit"
              disabled={!isFilled}
              className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </PageShell>
  );
}