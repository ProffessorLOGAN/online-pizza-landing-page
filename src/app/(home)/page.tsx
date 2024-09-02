import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ProductCard from "./components/product-card";
import { Product } from "@/typings";

const products: Product[] = [
  {
    id: "1",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "2",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "3",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "4",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "5",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "6",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "7",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
  {
    id: "8",
    name: "Margarita Pizza",
    description: "This is very tasty pizza",
    image: "/pizza-main.png",
    price: 500,
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto flex items-center justify-between py-24">
          <div className="mx-auto">
            <h1 className="text-7xl font-black font-sans leading-2">
              Super Delicious Pizza in <br />
              <span className="text-primary">Only 45 Minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a Fee Meal if Your Order Takes More Than 45 Minutes!
            </p>
            <Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold ">
              Get your pizza now
            </Button>
          </div>
          <div className="mx-auto">
            <Image
              alt="pizza-main"
              src={"/pizza-main.png"}
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-12 mx-auto ">
          <Tabs defaultValue="pizza">
            <TabsList className="gap-2">
              <TabsTrigger value="pizza" className="text-md ">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="beverages" className="text-md">
                Beverages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="beverages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
