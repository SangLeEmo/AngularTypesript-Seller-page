import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./Product/product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";
import { ManageComponent } from "./manage/manage.component";
import { ProductDetailComponent } from "./Product/product-detail/product-detail.component";
import { ManageProductEditComponent } from "./manage/manage-product-edit/manage-product-edit.component";
import { ManageProductAddComponent } from "./manage/manage-product-add/manage-product-add.component";

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "cart", component: CartComponent },
  { path: "manage", component: ManageComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "manage/product/add", component: ManageProductAddComponent },
  { path: "manage/product/:id", component: ManageProductEditComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
