import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CopyIcon } from "lucide-react";
import { toast } from "sonner";
import { User } from "../../types";

export function UserDetailsPopover({ ...props }: User) {
  const handleCopyId = () => {
    navigator.clipboard.writeText(props.id);
    toast.success("User ID copied to clipboard");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{props.email}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">{props.name}</h4>
            <p className="text-sm text-muted-foreground">{props.email}</p>
            <Button
              size="sm"
              variant="outline"
              className="w-full"
              onClick={handleCopyId}
            >
              <CopyIcon className="size-4 mr-2" />
              Copy Id
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
