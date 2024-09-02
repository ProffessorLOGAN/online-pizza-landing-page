"use client";
import React from "react";
import ToppingCard from "./topping-card";
import { Topping } from "@/typings";

const toppings = [
  {
    id: "1",
    name: "Chicken",
    image: "/chicken.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Jelapeno",
    image: "/Jelapeno.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Cheese",
    image: "/cheese.png",
    price: 50,
    isAvailable: true,
  },
];

const ToppingList = () => {
  const [selectedTopppings, setSelectedToppings] = React.useState([
    toppings[0],
  ]);

  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadyExists = selectedTopppings.some(
      (element) => element.id === topping.id
    );

    if (isAlreadyExists) {
      setSelectedToppings((prev) =>
        prev.filter((elm) => elm.id !== topping.id)
      );
      return;
    }

    setSelectedToppings((prev) => [...prev, topping]);
  };

  return (
    <section className="mt-6">
      <h3>Extra toppings</h3>
      <div className="flex items-center justify-center gap-4 mb-2">
        {toppings.map((topping) => {
          return (
            <ToppingCard
              topping={topping}
              key={topping.id}
              selectedToppings={selectedTopppings}
              handleCheckBoxCheck={handleCheckBoxCheck}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ToppingList;
