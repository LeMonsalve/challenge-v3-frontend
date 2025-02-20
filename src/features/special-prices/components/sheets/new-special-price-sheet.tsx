import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCreateSpecialPrice } from "../../api";
import { useNewSpecialPrice } from "../../hooks";
import { SpecialPriceForm } from "../forms/special-price-form";
import { CreateSpecialPrice } from "../../types";

export function NewSpecialPriceSheet() {
  const { isOpen, onClose } = useNewSpecialPrice();
  const mutation = useCreateSpecialPrice();

  const onSubmit = (values: CreateSpecialPrice) => {
    mutation.mutate(
      { ...values },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  const handleOpenChange = () => {
    if (isOpen) onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Special Price</SheetTitle>
          <SheetDescription>
            Create a new special price for a product and user.
          </SheetDescription>
        </SheetHeader>
        <SpecialPriceForm onSubmit={onSubmit} disabled={mutation.isPending} />
      </SheetContent>
    </Sheet>
  );
}
