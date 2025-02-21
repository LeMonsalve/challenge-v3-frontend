import { Toaster } from "sonner";
import { QueryProvider } from "./query-provider";
import { ThemeProvider, useTheme } from "./theme-provider";
import { SheetProvider } from "./sheet-provider";

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  const { theme } = useTheme();

  return (
    <QueryProvider>
      <ThemeProvider>
        <Toaster theme={theme} />
        <SheetProvider />
        {children}
      </ThemeProvider>
    </QueryProvider>
  );
}
