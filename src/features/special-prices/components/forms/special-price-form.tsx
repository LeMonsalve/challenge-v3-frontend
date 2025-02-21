import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SpecialPriceFormSchema } from "../../types";
import { specialPriceFormSchema } from "../../schemas";
import { ProductsCombobox } from "../../../products/components/comboboxes/products-combobox";
import { UsersCombobox } from "@/features/users/components/comboboxes/users-combobox";

type Props = {
  onSubmit: (values: SpecialPriceFormSchema) => void;
  defaultValues?: SpecialPriceFormSchema;
  disabled?: boolean;
  id?: string;
};

export function SpecialPriceForm({
  onSubmit,
  defaultValues,
  disabled,
  id,
}: Props) {
  const form = useForm<SpecialPriceFormSchema>({
    resolver: zodResolver(specialPriceFormSchema),
    defaultValues: {
      price: defaultValues?.price || 0,
      userId: defaultValues?.userId || "",
      productId: defaultValues?.productId || "",
    },
  });

  const handleSubmit = (values: SpecialPriceFormSchema) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="price"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Price</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  type="number"
                  placeholder="Enter the special price"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="productId"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Product</FormLabel>
              <FormControl>
                <ProductsCombobox
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="userId"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>User</FormLabel>
              <FormControl>
                <UsersCombobox value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" disabled={disabled}>
          {id ? "Update Special Price" : "Create Special Price"}
        </Button>
      </form>
    </Form>
  );
}
