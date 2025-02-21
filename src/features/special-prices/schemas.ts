import { z } from "zod";

export const specialPriceFormSchema = z.object({
  price: z.coerce
    .number()
    .min(10000, { message: "Price must be greater or equals than 10.000" })
    .max(1000000, { message: "Price must be less or equals than 1.000.000" }),
  productId: z.string().uuid(),
  userId: z.string().uuid(),
});
