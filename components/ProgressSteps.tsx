const steps = [
  { key: "cart", label: "Cart" },
  { key: "shipping", label: "Shipping" },
  { key: "payment", label: "Payment" },
  { key: "success", label: "Success" },
];

export default function ProgressSteps({
  current,
}: {
  current: "cart" | "shipping" | "payment" | "success";
}) {
  const currentIndex = steps.findIndex((step) => step.key === current);

  return (
    <div className="mb-6 rounded-3xl border border-white/60 bg-white/85 p-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur md:mb-8">
      <div className="overflow-x-auto">
        <div className="flex min-w-max items-center gap-3 sm:gap-4">
          {steps.map((step, index) => {
            const active = index <= currentIndex;

            return (
              <div key={step.key} className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    active
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-slate-300 bg-white text-slate-500"
                  }`}
                >
                  {index + 1}
                </div>

                <span
                  className={`whitespace-nowrap text-sm font-medium ${
                    active ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {step.label}
                </span>

                {index !== steps.length - 1 && (
                  <div className="h-px w-8 shrink-0 bg-slate-300 sm:w-10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}