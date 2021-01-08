import { Injectable } from "@angular/core";
import { CartItem } from "../models/CartItem";

@Injectable({
  providedIn: "root"
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() {}

  getCartItems() {
    return this.cartItems;
  }

  addCartItem(cartItem: CartItem) {
    this.cartItems.push(cartItem);
  }

  editCartItem(cartItem: CartItem) {
    this.cartItems.splice(
      this.cartItems.findIndex(x => x.product.id == cartItem.product.id),
      1,
      cartItem
    );
  }

  deleteCartItem(cartItem: CartItem) {
    this.cartItems.splice(
      this.cartItems.findIndex(x => x.product.id == cartItem.product.id),
      1
    );
  }
}
