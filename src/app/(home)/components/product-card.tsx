import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { PropTypes } from "@/typings";
import Image from "next/image";

import React from "react";
import ToppingList from "./topping-list";

const ProductCard = ({ product }: PropTypes) => {
  return (
    <Card className="border-none rounded-xl items-center ">
      <CardHeader className="flex items-center justify-center">
        <Image alt="pizza-image" width={150} height={150} src={product.image} />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p>
          <span>From </span>
          <span className="font-bold">₹{product.price}</span>
        </p>

        <Dialog>
          <DialogTrigger
            className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full 
       hover: shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 "
          >
            Choose
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0">
            <div className="flex ">
              <div className="w-1/3 bg-white  roundded p-8 flex items-center justify-center ">
                <Image
                  alt="pizza-image"
                  width={150}
                  height={150}
                  src={"/pizza-main.png"}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1 ">{product.description}</p>

                <h4 className="mt-6">Choose the size</h4>

                <RadioGroup
                  defaultValue="small"
                  className="grid grid-cols-3 gap-4 mt-2"
                >
                  <div>
                    <RadioGroupItem
                      value="small"
                      id="small"
                      className="peer sr-only"
                      aria-label="Small"
                    />

                    <Label
                      htmlFor="small"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 
                    hover: bg-accent text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Small
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="medium"
                      id="medium"
                      className="peer sr-only"
                      aria-label="Medium"
                    />

                    <Label
                      htmlFor="medium"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 
                    hover: bg-accent text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Medium
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="large"
                      id="large"
                      className="peer sr-only"
                      aria-label="Large"
                    />

                    <Label
                      htmlFor="large"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 
                    hover: bg-accent text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Large
                    </Label>
                  </div>
                </RadioGroup>

                <h4 className="mt-6">Choose the crust</h4>

                <RadioGroup
                  defaultValue="thin"
                  className="grid grid-cols-3 gap-4 mt-2"
                >
                  <div>
                    <RadioGroupItem
                      value="thin"
                      id="thin"
                      className="peer sr-only"
                      aria-label="Thin"
                    />

                    <Label
                      htmlFor="thin"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 
hover: bg-accent text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Thin
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="thick"
                      id="thick"
                      className="peer sr-only"
                      aria-label="Thick"
                    />

                    <Label
                      htmlFor="thick"
                      className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 
hover: bg-accent text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      Thick
                    </Label>
                  </div>
                </RadioGroup>

                <ToppingList />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
