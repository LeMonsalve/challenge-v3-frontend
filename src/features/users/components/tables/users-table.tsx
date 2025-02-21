import { useGetUsers } from "../../api";
import { DataTable } from "@/components/data-table";
import { userColumns } from "./user-column";

export function UsersTable() {
  const usersQuery = useGetUsers();
  const users = usersQuery.data || [];

  return <DataTable columns={userColumns} data={users} />;
}
