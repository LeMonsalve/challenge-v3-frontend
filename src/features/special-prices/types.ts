import { z } from "zod";
import { specialPriceFormSchema } from "./schemas";
import { Product } from "../products/types";
import { User } from "../users/types";

export type SpecialPrice = {
  _id: string;
  price: number;
  productId: string;
  userId: string;
};

export type FullSpecialPrice = SpecialPrice & {
  product: Product;
  user: User;
};

export type SpecialPriceFormSchema = z.infer<typeof specialPriceFormSchema>;
export type CreateSpecialPrice = Omit<SpecialPrice, "_id">;
export type UpdateSpecialPrice = Partial<CreateSpecialPrice>;
