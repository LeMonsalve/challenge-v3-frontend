import { Combobox } from "@/components/combobox";
import { useGetUsers } from "../../api";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  value: string;
  onChange: (...value: unknown[]) => void;
};

export function UsersCombobox({ value, onChange }: Props) {
  const usersQuery = useGetUsers();
  const users = usersQuery.data || [];

  const data = users.map((user) => ({
    value: user.id,
    label: user.email,
  }));

  return (
    <>
      {!usersQuery.isLoading ? (
        <Combobox
          value={value}
          values={data}
          onChange={onChange}
          emptyText="No users found"
          placeholder="Select a user..."
        />
      ) : (
        <>
          <Skeleton className="w-max h-8" />
        </>
      )}
    </>
  );
}
