import { api } from "@/lib/client";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./types";

export function useGetProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { status, data, request } = await api.get<Product[]>("/products");

      if (status !== 200) throw new Error(request.statusText);

      return data;
    },
  });
}
