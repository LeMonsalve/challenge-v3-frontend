import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";
import { useEditSpecialPrice, useGetSpecialPrice } from "../../api";
import { useOpenSpecialPrice } from "../../hooks";
import { SpecialPriceForm } from "../forms/special-price-form";
import { UpdateSpecialPrice } from "../../types";

export function EditSpecialPriceSheet() {
  const { id, isOpen, onClose } = useOpenSpecialPrice();
  const postQuery = useGetSpecialPrice(id);
  const editMutation = useEditSpecialPrice();

  const isPending = editMutation.isPending || postQuery.isPending;
  const isLoading = postQuery.isLoading;

  const onSubmit = (values: UpdateSpecialPrice) => {
    if (id === undefined) return;

    editMutation.mutate(
      { updateSpecialPriceDto: values, id },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>Edit Post</SheetTitle>
          <SheetDescription>Edit your post details below.</SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="size-4 text-muted-foreground animate-spin" />
          </div>
        ) : (
          <SpecialPriceForm
            id={id}
            onSubmit={onSubmit}
            disabled={isLoading || isPending}
            defaultValues={postQuery.data}
          />
        )}
      </SheetContent>
    </Sheet>
  );
}
