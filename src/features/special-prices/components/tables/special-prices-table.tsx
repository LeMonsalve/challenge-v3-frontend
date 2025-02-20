import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { specialPrices, products, users } from "@/lib/data";

export function SpecialPricesTable() {
  return (
    <Table>
      <TableCaption>A list of our special price offers.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>User</TableHead>
          <TableHead className="text-right">Original Price</TableHead>
          <TableHead className="text-right">Special Price</TableHead>
          <TableHead>End Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {specialPrices.map((item) => {
          const product = products.find((p) => p._id === item.productId);
          const user = users.find((u) => u.id === item.userId);
          return (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{product?.name}</TableCell>
              <TableCell>{user?.name}</TableCell>
              <TableCell className="text-right line-through text-muted-foreground">
                ${product?.price.toFixed(2)}
              </TableCell>
              <TableCell className="text-right font-bold">
                ${item.specialPrice.toFixed(2)}
              </TableCell>
              <TableCell>{item.endDate}</TableCell>
              <TableCell className="text-right">
                <Button size="sm">Buy Now</Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
