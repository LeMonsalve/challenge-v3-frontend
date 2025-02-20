import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useGetProducts } from "@/features/products/api";

export function ProductTable() {
  const productsQuery = useGetProducts();
  const products = productsQuery.data || [];

  return (
    <Table>
      <TableCaption>Products List</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!productsQuery.isLoading &&
          products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-16 h-16 rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm">Add to Cart</Button>
              </TableCell>
            </TableRow>
          ))}
        {productsQuery.isLoading && <ProductsSkeleton />}
      </TableBody>
    </Table>
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
