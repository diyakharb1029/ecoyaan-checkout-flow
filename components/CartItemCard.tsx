import Image from "next/image";
import { CartItem } from "@/types";
import { formatINR } from "@/lib/utils";

export default function CartItemCard({ item }: { item: CartItem }) {
  return (
    <div className="group rounded-3xl border border-white/60 bg-white/90 p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(15,23,42,0.1)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-28 sm:w-28">
          <Image
            src={item.image}
            alt={item.product_name}
            fill
            className="object-cover object-center transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 112px"
          />
        </div>

        <div className="flex flex-1 items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Ecoyaan Essential
            </p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              {item.product_name}
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Quantity: <span className="font-medium text-slate-700">{item.quantity}</span>
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-lg font-bold text-slate-900">
              {formatINR(item.product_price * item.quantity)}
            </p>
            <p className="text-sm text-slate-500">
              {formatINR(item.product_price)} each
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}