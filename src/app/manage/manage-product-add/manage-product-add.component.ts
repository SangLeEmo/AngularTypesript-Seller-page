import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/Products";
import { ProductService } from "src/app/services/product.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-manage-product-add",
  templateUrl: "./manage-product-add.component.html",
  styleUrls: ["./manage-product-add.component.css"]
})
export class ManageProductAddComponent implements OnInit {
  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}

  AddProduct() {
    this.productService.AddProduct(this.product);
    this.router.navigate(["/manage"]);
  }
}
