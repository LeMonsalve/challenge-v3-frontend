import { useGetProducts } from "@/features/products/api";
import { useGetUsers } from "@/features/users/api";
import { useGetSpecialPrices } from "../../api";
import { Loader2Icon } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { specialPriceColumns } from "./special-price-columns";
import { FullSpecialPrice } from "../../types";
import { useEffect, useState } from "react";

export function SpecialPricesTable() {
  const [fullSpecialPrices, setFullSpecialPrices] = useState<
    FullSpecialPrice[]
  >([]);

  const specialPricesQuery = useGetSpecialPrices();

  const productsQuery = useGetProducts();

  const usersQuery = useGetUsers();

  const isLoading =
    specialPricesQuery.isLoading ||
    productsQuery.isLoading ||
    usersQuery.isLoading;

  useEffect(() => {
    const specialPrices = specialPricesQuery.data ?? [];
    const products = productsQuery.data ?? [];
    const users = usersQuery.data ?? [];

    if (!isLoading) {
      const fullSpecialPrices = specialPrices.map((specialPrice) => {
        const product = products.find((p) => p.id === specialPrice.productId);
        const user = users.find((u) => u.id === specialPrice.userId);

        return {
          ...specialPrice,
          product: product!,
          user: user!,
        };
      });

      setFullSpecialPrices(fullSpecialPrices);
    }
  }, [isLoading, productsQuery.data, specialPricesQuery.data, usersQuery.data]);

  return (
    <>
      {!isLoading ? (
        <DataTable columns={specialPriceColumns} data={fullSpecialPrices} />
      ) : (
        <div className="w-full flex items-center justify-center p-8">
          <Loader2Icon className="size-8 text-primary animate-spin" />
        </div>
      )}
    </>
  );
}
