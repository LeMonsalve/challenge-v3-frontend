import { api } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { User } from "./types";

export function useGetUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { status, data, request } = await api.get<User[]>("/users");

      if (status !== 200) throw new Error(request.statusText);

      return data;
    },
  });
}
