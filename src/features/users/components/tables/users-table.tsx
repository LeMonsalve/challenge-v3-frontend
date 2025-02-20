import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { useGetUsers } from "../../api";

export function UsersTable() {
  const usersQuery = useGetUsers();
  const users = usersQuery.data || [];

  return (
    <Table>
      <TableCaption>Users list</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Id (UUID)</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="">{user.id}</TableCell>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
