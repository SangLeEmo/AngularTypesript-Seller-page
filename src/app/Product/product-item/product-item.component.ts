import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/Products";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.GetProducts().subscribe(products => {
      const arr = [];
      Object.keys(products).forEach(key => {
        arr.push(products[key]);
      });
      this.products = arr;
    });
  }
}
