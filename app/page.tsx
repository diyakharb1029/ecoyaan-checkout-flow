import PageShell from "@/components/PageShell";
import CartPageClient from "@/components/CartPageClient";
import { getCartData } from "@/lib/mockData";

export default async function HomePage() {
  const cartData = await getCartData();

  return (
    <PageShell>
      <CartPageClient cartData={cartData} />
    </PageShell>
  );
}