import { z } from "zod";

export const specialPriceFormSchema = z.object({
  price: z.coerce
    .number()
    .min(1, { message: "Price must be greater than 0" })
    .max(99999999),
  productId: z.string().uuid(),
  userId: z.string().uuid(),
});
