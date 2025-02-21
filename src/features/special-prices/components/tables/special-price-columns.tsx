import { ColumnDef, Row } from "@tanstack/react-table";
import { FullSpecialPrice } from "../../types";
import { ProductDetailsPopover } from "@/features/products/components/popovers/product-details-popover";
import { UserDetailsPopover } from "@/features/users/components/popovers/user-details-popover";
import { Button } from "@/components/ui/button";
import { EditIcon, Trash2Icon } from "lucide-react";
import { useOpenSpecialPrice } from "../../hooks";

export const specialPriceColumns: ColumnDef<FullSpecialPrice>[] = [
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => <ProductDetailsPopover {...row.original.product} />,
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => <UserDetailsPopover {...row.original.user} />,
  },
  {
    accessorKey: "price",
    header: "Special Price",
  },
  {
    accessorKey: "productId",
    header: "Original Price",
    cell: ({ row }) => row.original.product.price,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <ActionsCell {...row} />,
  },
];

function ActionsCell({ original }: Row<FullSpecialPrice>) {
  const { onOpen } = useOpenSpecialPrice();

  return (
    <div className="space-x-2">
      <Button size="sm" variant="outline" onClick={() => onOpen(original._id)}>
        <EditIcon className="size-4" />
      </Button>
      <Button size="sm" variant="destructive">
        <Trash2Icon className="size-4" />
      </Button>
    </div>
  );
}
