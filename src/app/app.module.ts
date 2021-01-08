import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./Product/product-list/product-list.component";
import { ProductItemComponent } from "./Product/product-item/product-item.component";
import { ProductDetailComponent } from "./Product/product-detail/product-detail.component";
import { CartComponent } from "./cart/cart.component";
import { CartListComponent } from "./Cart/cart-list/cart-list.component";
import { ManageComponent } from "./manage/manage.component";
import { ManageProductComponent } from "./Manage/manage-product/manage-product.component";
import { ManageProductAddComponent } from "./manage/manage-product-add/manage-product-add.component";
import { ManageProductEditComponent } from "./manage/manage-product-edit/manage-product-edit.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    CartComponent,
    CartListComponent,
    ManageComponent,
    ManageProductComponent,
    ManageProductAddComponent,
    ManageProductEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
