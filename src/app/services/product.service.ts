import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/Products";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private homeUrl = "https://doan1-77e15.firebaseio.com/";
  products: Observable<Product[]>;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {
    this.products = this.http.get<Product[]>(this.homeUrl + "/products.json");
  }

  GetProducts() {
    return this.products;
  }

  AddProduct(product: Product) {
    this.http
      .post(this.homeUrl + "/products.json", product)
      .toPromise()
      .then();
  }

  EditProduct(product: Product) {
    this.products.toPromise().then(products => {
      for (const key in products) {
        if (products.hasOwnProperty(key)) {
          const p = products[key];
          if (p.id == product.id) {
            this.http
              .put(
                `${this.homeUrl}/products/${key}.json`,
                product,
                this.httpOptions
              )
              .toPromise()
              .then();
            break;
          }
        }
      }
    });
  }

  DeleteProduct(product: Product) {
    this.products.toPromise().then(products => {
      for (const key in products) {
        if (products.hasOwnProperty(key)) {
          const p = products[key];
          if (p.id == product.id) {
            this.http
              .delete(`${this.homeUrl}/products/${key}.json`)
              .toPromise()
              .then();
            break;
          }
        }
      }
    });
  }
}
