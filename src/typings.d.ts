export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};

type PropTypes = { product: Product };

export type Topping = {
  id: string;
  name: string;
  price: number;
  image: string;
  isAvailable: boolean;
};

type PropType = {
  topping: Topping;
  selectedToppings: Topping[];
  handleCheckBoxCheck: (topping: Topping) => void;
};
