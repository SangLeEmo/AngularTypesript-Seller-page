import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/Products";

@Component({
  selector: "app-manage-product",
  templateUrl: "./manage-product.component.html",
  styleUrls: ["./manage-product.component.css"]
})
export class ManageProductComponent implements OnInit {
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

  DeleteProduct(id: string) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == id) {
        this.productService.DeleteProduct(element);
        break;
      }
    }
    this.products = this.products.filter(p => p.id != id);
  }
}
