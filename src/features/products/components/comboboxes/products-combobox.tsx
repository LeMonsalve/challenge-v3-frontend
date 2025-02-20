import { Combobox } from "@/components/combobox";
import { useGetProducts } from "../../api";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  value: string;
  onChange: (...value: unknown[]) => void;
};

export function ProductsCombobox({ value, onChange }: Props) {
  const productsQuery = useGetProducts();
  const products = productsQuery.data || [];

  const data = products.map((product) => ({
    value: product.id,
    label: product.name,
  }));

  return (
    <>
      {!productsQuery.isLoading ? (
        <Combobox
          value={value}
          values={data}
          onChange={onChange}
          emptyText="No products found"
          placeholder="Select a product..."
        />
      ) : (
        <>
          <Skeleton className="w-max h-8" />
        </>
      )}
    </>
  );
}
