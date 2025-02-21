import { api } from "@/lib/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateSpecialPrice, SpecialPrice, UpdateSpecialPrice } from "./types";
import { toast } from "sonner";

export function useGetSpecialPrices() {
  return useQuery({
    queryKey: ["special-prices"],
    queryFn: async () => {
      const { status, data, request } = await api.get<SpecialPrice[]>(
        "/special-prices"
      );

      if (status !== 200) throw new Error(request.statusText);

      return data;
    },
  });
}

export function useCreateSpecialPrice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (specialPrice: CreateSpecialPrice) => {
      const { status, data, request } = await api.post(
        "/special-prices",
        specialPrice
      );

      if (status !== 201) throw new Error(request.statusText);

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["special-prices"] });
      toast.success("Special price created successfully.");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}

export function useGetSpecialPrice(id?: string) {
  return useQuery({
    enabled: !!id,
    queryKey: ["special-prices", { id }],
    queryFn: async () => {
      const { status, data, request } = await api.get<SpecialPrice>(
        `/special-prices/${id}`
      );

      if (status !== 200) throw new Error(request.statusText);

      return data;
    },
  });
}

type EditSpecialPrice = {
  updateSpecialPriceDto: UpdateSpecialPrice;
  id?: string;
};

export function useEditSpecialPrice() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ updateSpecialPriceDto, id }: EditSpecialPrice) => {
      const { status, data, request } = await api.put(
        `/special-prices/${id}`,
        updateSpecialPriceDto
      );

      if (status !== 200) throw new Error(request.statusText);

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["special-prices"] });
      toast.success("Special price updated successfully.");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
