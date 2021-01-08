import { Component, OnInit } from "@angular/core";
import { CartItem } from "src/app/models/CartItem";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.css"]
})
export class CartListComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
}
