import { DataTable } from "@/components/data-table";
import { Skeleton } from "@/components/ui/skeleton";
import { TableRow, TableCell } from "@/components/ui/table";
import { useGetProducts } from "@/features/products/api";
import { productsColumns } from "./product-columns";

export function ProductTable() {
  const productsQuery = useGetProducts();
  const products = productsQuery.data || [];

  return (
    <>
      {productsQuery.isLoading ? (
        <ProductsSkeleton />
      ) : (
        <DataTable columns={productsColumns} data={products} />
      )}
    </>
  );
}

function ProductsSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell colSpan={4}>
            <Skeleton className="h-8 w-full" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
