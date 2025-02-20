import { EditSpecialPriceSheet } from "@/features/special-prices/components/sheets/edit-special-price-sheet";
import { NewSpecialPriceSheet } from "@/features/special-prices/components/sheets/new-special-price-sheet";
import { useEffect, useState } from "react";

export function SheetProvider() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <>
          <NewSpecialPriceSheet />
          <EditSpecialPriceSheet />
        </>
      )}
    </>
  );
}
