import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@radix-ui/react-label";
import { Product } from "../../types";
import { CopyIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export function ProductDetailsPopover({ ...props }: Product) {
  const handleCopyId = () => {
    navigator.clipboard.writeText(props.id);
    toast.success("Product ID copied to clipboard");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{props.name}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{props.name}</h4>
            <p className="text-sm text-muted-foreground">{props.description}</p>
          </div>
          <div className="flex items-start justify-start">
            <img
              src={props.imageUrl || "/placeholder.svg"}
              alt={props.name}
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col justify-between ml-4 flex-1 gap-1 h-full">
              <div>
                <div className="flex items-center justify-between">
                  <Label>Price</Label>
                  <span className="font-medium">${props.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Label>Stock</Label>
                  <Badge
                    variant={
                      props.countInStock > 0 ? "secondary" : "destructive"
                    }
                  >
                    {props.countInStock > 0
                      ? `${props.countInStock} in stock`
                      : "Out of stock"}
                  </Badge>
                </div>
              </div>
              <Button size="sm" variant="outline" onClick={handleCopyId}>
                <CopyIcon className="size-4" />
                Copy Id
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
