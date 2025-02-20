import { Providers } from "./components/providers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTable } from "./features/products/components";
import { SpecialPricesTable } from "./features/special-prices/components";
import { UsersTable } from "./features/users/components";
import { Button } from "./components/ui/button";
import { PlusIcon } from "lucide-react";
import { useNewSpecialPrice } from "./features/special-prices/hooks";

function App() {
  const { onOpen } = useNewSpecialPrice();

  return (
    <Providers>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-4">
            Challenge V3 - Admin Panel
          </h1>
          <Button size="sm" onClick={onOpen}>
            <PlusIcon /> Create Special Price
          </Button>
        </div>
        <Tabs defaultValue="products">
          <div className="flex justify-between mb-4">
            <TabsList className="">
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="special-prices">Special Prices</TabsTrigger>
            </TabsList>
            <TabsList className="">
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="products">
            <ProductTable />
          </TabsContent>
          <TabsContent value="special-prices">
            <SpecialPricesTable />
          </TabsContent>
          <TabsContent value="users">
            <UsersTable />
          </TabsContent>
        </Tabs>
      </div>
    </Providers>
  );
}

export default App;
