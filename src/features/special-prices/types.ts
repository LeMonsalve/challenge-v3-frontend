import { z } from "zod";
import { specialPriceFormSchema } from "./schemas";

export type SpecialPrice = {
  _id: string;
  price: number;
  productId: string;
  userId: string;
};

export type SpecialPriceFormSchema = z.infer<typeof specialPriceFormSchema>;
export type CreateSpecialPrice = Omit<SpecialPrice, "_id">;
export type UpdateSpecialPrice = Partial<CreateSpecialPrice>;
