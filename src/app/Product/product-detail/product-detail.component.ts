import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/Products";
import { CartItem } from "src/app/models/CartItem";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  quantity: number = 0;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.GetProducts().subscribe(products => {
        for (const key in products) {
          if (products.hasOwnProperty(key)) {
            const product = products[key];
            if (product.id == params.id) {
              this.product = product;
            }
          }
        }
      });
    });
  }

  AddToCart() {
    var cartItem = new CartItem(this.product, this.quantity);
    this.cartService.addCartItem(cartItem);
  }
}
