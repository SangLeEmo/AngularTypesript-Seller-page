import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/Products";
import { ProductService } from "src/app/services/product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-manage-product-edit",
  templateUrl: "./manage-product-edit.component.html",
  styleUrls: ["./manage-product-edit.component.css"]
})
export class ManageProductEditComponent implements OnInit {
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.GetProducts().subscribe(products => {
        for (const key in products) {
          if (products.hasOwnProperty(key)) {
            const p = products[key];
            if (p.id == params.id) {
              this.product = p;
            }
          }
        }
      });
    });
  }

  EditProduct() {
    this.productService.EditProduct(this.product);
    this.router.navigate(["/manage"]);
  }
}
