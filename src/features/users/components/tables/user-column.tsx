import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../types";

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: "imageUrl",
    header: "Id (uuid)",
    cell: ({ row }) => <span className="font-semibold">{row.original.id}</span>,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];
