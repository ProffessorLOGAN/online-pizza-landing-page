import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PropTypes } from "@/typings";
import Image from "next/image";

import React from "react";

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

        <Button
          className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full 
       hover: shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 "
        >
          Choose
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
