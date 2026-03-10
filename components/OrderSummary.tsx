import { CartData } from "@/types";
import { calculateGrandTotal, calculateSubtotal } from "@/lib/mockData";
import { formatINR } from "@/lib/utils";

export default function OrderSummary({
  data,
  buttonText,
  onButtonClick,
}: {
  data: CartData;
  buttonText?: string;
  onButtonClick?: () => void;
}) {
  const subtotal = calculateSubtotal(data.cartItems);
  const grandTotal = calculateGrandTotal(data);

  return (
    <aside className="sticky top-6 rounded-[28px] border border-emerald-100 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          Payment Snapshot
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">Order Summary</h2>
        <p className="mt-1 text-sm text-slate-500">
          A simple pricing summary showing subtotal, shipping, and final order total.
        </p>
      </div>

      <div className="space-y-4 rounded-2xl bg-slate-50 p-4">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Subtotal</span>
          <span className="font-medium text-slate-900">{formatINR(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Standard Shipping</span>
          <span className="font-medium text-slate-900">
            {formatINR(data.shipping_fee)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Discount</span>
          <span className="font-medium text-slate-900">
            - {formatINR(data.discount_applied)}
          </span>
        </div>

        <div className="h-px bg-slate-200" />

        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-slate-900">Grand Total</span>
          <span className="text-2xl font-bold text-slate-900">
            {formatINR(grandTotal)}
          </span>
        </div>
      </div>

      {buttonText && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="mt-6 flex w-full items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          {buttonText}
        </button>
      )}

      <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-900">
        Responsive layout • Server-rendered data • Multi-step checkout
      </div>
    </aside>
  );
}