import { Toaster } from "sonner";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";
import { SheetProvider } from "./sheet-provider";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Toaster />
        <SheetProvider />
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
}
