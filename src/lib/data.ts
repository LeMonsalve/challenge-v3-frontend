import { Product } from "@/features/products/types";

export const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

export const products: Product[] = [
  {
    _id: 1,
    name: "Laptop",
    price: 999.99,
    description: "High-performance laptop",
    countInStock: 10,
    imageUrl: "",
  },
  {
    _id: 2,
    name: "Smartphone",
    price: 599.99,
    description: "Latest model smartphone",
    countInStock: 10,
    imageUrl: "",
  },
  {
    _id: 3,
    name: "Headphones",
    price: 199.99,
    description: "Noise-cancelling headphones",
    countInStock: 10,
    imageUrl: "",
  },
  {
    _id: 4,
    name: "Tablet",
    price: 399.99,
    description: "Lightweight tablet",
    countInStock: 10,
    imageUrl: "",
  },
  {
    _id: 5,
    name: "Smartwatch",
    price: 299.99,
    description: "Fitness tracking smartwatch",
    countInStock: 10,
    imageUrl: "",
  },
];

export const specialPrices = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    specialPrice: 799.99,
    endDate: "2023-08-31",
  },
  {
    id: 2,
    productId: 2,
    userId: 2,
    specialPrice: 499.99,
    endDate: "2023-09-15",
  },
  {
    id: 3,
    productId: 3,
    userId: 3,
    specialPrice: 149.99,
    endDate: "2023-07-31",
  },
  {
    id: 4,
    productId: 4,
    userId: 1,
    specialPrice: 349.99,
    endDate: "2023-12-25",
  },
  {
    id: 5,
    productId: 5,
    userId: 2,
    specialPrice: 249.99,
    endDate: "2023-08-05",
  },
];
