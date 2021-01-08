import { Product } from "./Products";

export class CartItem {
  product: Product;
  quantity: number;

  constructor(product?: Product, quantity?: number) {
    this.product = product || new Product();
    this.quantity = quantity || 0;
  }
}
