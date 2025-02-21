import { ColumnDef } from "@tanstack/react-table";
import { Product } from "../../types";

export const productsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => (
      <img
        src={row.original.imageUrl}
        alt={row.original.name}
        loading="lazy"
        className="w-12 h-12 rounded-md"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <span className="text-right">${row.original.price.toFixed(2)}</span>
    ),
  },
];
