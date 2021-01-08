(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/q8S":
/*!********************************************!*\
  !*** ./src/app/manage/manage.component.ts ***!
  \********************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage.component.html */ "n5Nt");
/* harmony import */ var _manage_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage.component.css */ "SyPZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ManageComponent = /** @class */ (function () {
    function ManageComponent() {
    }
    ManageComponent.prototype.ngOnInit = function () {
    };
    ManageComponent.ctorParameters = function () { return []; };
    ManageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-manage',
            template: _raw_loader_manage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_manage_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AngularSalerPage\src\main.ts */"zUnb");


/***/ }),

/***/ "1PcV":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "3Sp1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/manage-product-add/manage-product-add.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"container\">\r\n  <h1>Thêm sản phẩm</h1>\r\n  <div>\r\n    <label for=\"productId\">Mã sản phẩm: </label>\r\n    <input type=\"text\" name=\"productId\" id=\"productId\" [(ngModel)]=\"product.id\" [value]=\"product.id\">\r\n  </div>\r\n  <div>\r\n    <label for=\"productName\">Tên sản phẩm: </label>\r\n    <input type=\"text\" name=\"productName\" id=\"productName\" [(ngModel)]=\"product.name\" [value]=\"product.name\">\r\n  </div>\r\n  <div>\r\n    <label for=\"productSize\">Size: </label>\r\n    <input type=\"text\" name=\"productSize\" id=\"productSize\" [(ngModel)]=\"product.size\" [value]=\"product.size\">\r\n  </div>\r\n  <div>\r\n    <label for=\"productPrice\">Giá: </label>\r\n    <input type=\"number\" name=\"productPrice\" id=\"productPrice\" [(ngModel)]=\"product.price\" [value]=\"product.price\">\r\n  </div>\r\n  <div>\r\n    <label for=\"productImg\">Link ảnh: </label>\r\n    <input type=\"text\" name=\"productImg\" id=\"productImg\" [(ngModel)]=\"product.image\" [value]=\"product.image\">\r\n  </div>\r\n  <button (click)=\"AddProduct()\">Thêm</button>\r\n</div>-->\r\n\r\n<p class=\"container text-center\" style=\"font-weight:inherit; font-style:normal; font-size:24PX\">THÊM SẢN PHẨM</p>\r\n<form class=\"container\">\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\"for=\"productId\">Mã sản phẩm: </label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" class=\"form-control\" name=\"productId\" id=\"productId\" [(ngModel)]=\"product.id\" [value]=\"product.id\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\" for=\"productName\">Tên sản phẩm: </label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" class=\"form-control\" name=\"productName\" id=\"productName\" [(ngModel)]=\"product.name\" [value]=\"product.name\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\" for=\"productSize\">Size: </label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" class=\"form-control\" name=\"productSize\" id=\"productSize\" [(ngModel)]=\"product.size\" [value]=\"product.size\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\" for=\"productPrice\">Giá: </label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"number\" class=\"form-control\" name=\"productPrice\" id=\"productPrice\" [(ngModel)]=\"product.price\" [value]=\"product.price\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\" for=\"productImg\">Link ảnh: </label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" class=\"form-control\" name=\"productImg\" id=\"productImg\" [(ngModel)]=\"product.image\" [value]=\"product.image\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-sm-10\">\r\n      <button (click)=\"AddProduct()\" class=\"btn btn-success\">Thêm</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "4GcS":
/*!******************************************************************************!*\
  !*** ./src/app/manage/manage-product-edit/manage-product-edit.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcHJvZHVjdC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "9SCu":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Product/product-list/product-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <!--<h1>Trang chủ</h1>-->\r\n  <!-- <p class=\"container text-center\" style=\"font-weight:inherit; font-style:normal; font-size:24px\">Our Products</p> -->\r\n  <app-product-item></app-product-item>\r\n</div>\r\n");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DN7M":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.homeUrl = "https://doan1-77e15.firebaseio.com/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
        this.products = this.http.get(this.homeUrl + "/products.json");
    }
    ProductService.prototype.GetProducts = function () {
        return this.products;
    };
    ProductService.prototype.AddProduct = function (product) {
        this.http
            .post(this.homeUrl + "/products.json", product)
            .toPromise()
            .then();
    };
    ProductService.prototype.EditProduct = function (product) {
        var _this = this;
        this.products.toPromise().then(function (products) {
            for (var key in products) {
                if (products.hasOwnProperty(key)) {
                    var p = products[key];
                    if (p.id == product.id) {
                        _this.http
                            .put(_this.homeUrl + "/products/" + key + ".json", product, _this.httpOptions)
                            .toPromise()
                            .then();
                        break;
                    }
                }
            }
        });
    };
    ProductService.prototype.DeleteProduct = function (product) {
        var _this = this;
        this.products.toPromise().then(function (products) {
            for (var key in products) {
                if (products.hasOwnProperty(key)) {
                    var p = products[key];
                    if (p.id == product.id) {
                        _this.http
                            .delete(_this.homeUrl + "/products/" + key + ".json")
                            .toPromise()
                            .then();
                        break;
                    }
                }
            }
        });
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "KctG":
/*!*****************************************************************************!*\
  !*** ./src/app/manage/manage-product-edit/manage-product-edit.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ManageProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductEditComponent", function() { return ManageProductEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_product_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-product-edit.component.html */ "rFr4");
/* harmony import */ var _manage_product_edit_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-product-edit.component.css */ "4GcS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Products */ "N4U/");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var ManageProductEditComponent = /** @class */ (function () {
    function ManageProductEditComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.product = new src_app_models_Products__WEBPACK_IMPORTED_MODULE_4__["Product"]();
    }
    ManageProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.productService.GetProducts().subscribe(function (products) {
                for (var key in products) {
                    if (products.hasOwnProperty(key)) {
                        var p = products[key];
                        if (p.id == params.id) {
                            _this.product = p;
                        }
                    }
                }
            });
        });
    };
    ManageProductEditComponent.prototype.EditProduct = function () {
        this.productService.EditProduct(this.product);
        this.router.navigate(["/manage"]);
    };
    ManageProductEditComponent.ctorParameters = function () { return [
        { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ManageProductEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-manage-product-edit",
            template: _raw_loader_manage_product_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_manage_product_edit_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ManageProductEditComponent);
    return ManageProductEditComponent;
}());



/***/ }),

/***/ "LxfV":
/*!********************************************************************!*\
  !*** ./src/app/Manage/manage-product/manage-product.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "M2Tr":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <p class=\"container text-center\" style=\"font-weight:inherit; font-style:normal; font-size:24PX\">GIỎ HÀNG</p>\r\n  <app-cart-list></app-cart-list>\r\n</div>\r\n");

/***/ }),

/***/ "N4U/":
/*!************************************!*\
  !*** ./src/app/models/Products.ts ***!
  \************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, price, size, image) {
        this.id = id || "";
        this.name = name || "";
        this.price = price || 0;
        this.size = size || "";
        this.image = image || "";
    }
    return Product;
}());



/***/ }),

/***/ "PG7V":
/*!*******************************************************!*\
  !*** ./src/app/Cart/cart-list/cart-list.component.ts ***!
  \*******************************************************/
/*! exports provided: CartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartListComponent", function() { return CartListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart-list.component.html */ "kolE");
/* harmony import */ var _cart_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-list.component.css */ "k8ad");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");





var CartListComponent = /** @class */ (function () {
    function CartListComponent(cartService) {
        this.cartService = cartService;
        this.cartItems = [];
    }
    CartListComponent.prototype.ngOnInit = function () {
        this.cartItems = this.cartService.getCartItems();
    };
    CartListComponent.ctorParameters = function () { return [
        { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
    ]; };
    CartListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-cart-list",
            template: _raw_loader_cart_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cart_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], CartListComponent);
    return CartListComponent;
}());



/***/ }),

/***/ "R+OX":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Product/product-item/product-item.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"products\">\r\n  <ul>\r\n    <li *ngFor=\"let product of products\">\r\n      <a [routerLink]=\"[ '/product/' + product.id ]\">\r\n        <img [src]=\"product.image\" alt=\"\">\r\n        Mã SP: {{ product.id }} - Tên SP: {{product.name}} - Size: {{product.size}} - {{product.price}}đ\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div> -->\r\n<div *ngIf=\"products\" class=\"row\">\r\n  <div class=\"col-md-4 col-sm-6 col-6\" *ngFor=\"let product of products\">\r\n    <div class=\"card text-center\" [routerLink]=\"[ '/product/' + product.id ]\" style=\"min-height: 400px; max-height: 550px;\">\r\n      <img [src]=\"product.image\" class=\"card-img-top\" [alt]=\"product.name\" >\r\n      <div class=\"card-body\">\r\n        <div class=\"card-title\" >\r\n          <h5>{{ product.name }}</h5>\r\n        </div>\r\n        <!-- <p class=\"card-text\">#{{ product.id }}</p> -->\r\n        <p class=\"card-text\"><small class=\"text-mute\">Size: {{ product.size }}</small></p>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <p>{{ product.price | currency: 'VND' }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "RENT":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Product/product-detail/product-detail.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"container\">\r\n  <img [src]=\"product.image\" alt=\"\">\r\n  <h3>{{product.name}}</h3> - <h5>{{ product.id }}</h5>\r\n  <p>Size: {{product.size}}</p>\r\n  <p>Giá: {{product.price}}</p>\r\n  <label>Số lượng: </label>\r\n  <input type=\"number\" [(ngModel)]=\"quantity\" [value]=\"quantity\">\r\n  <button (click)=\"AddToCart()\">Thêm vào giỏ hàng</button>\r\n</div>-->\r\n<div class=\"container text-center\">\r\n  <div class=\"card mb-3\" style=\"max-width: 840px;\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-md-4\">\r\n        <img [src]=\"product.image\" class=\"card-img\" [alt]=\"product.name\">\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\"><a style=\"font-size:44px;\">{{product.name}}</a> ( {{ product.id }} )</h5>\r\n          <p class=\"card-text\">Size: <a style=\"font-size:24px;\">{{product.size}}</a></p>\r\n          <p class=\"card-text\">Giá: <a style=\"font-size:40px;\"> {{product.price}}</a> VNĐ</p>\r\n          <!--<label>Số lượng: </label>-->\r\n          <!--<input type=\"number\" [(ngModel)]=\"quantity\" [value]=\"quantity\">-->\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\">Số lượng</span>\r\n            </div>\r\n            <input type=\"number\" class=\"form-control\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\" [(ngModel)]=\"quantity\" [value]=\"quantity\" min=\"1\">\r\n            <div class=\"input-group-append\">\r\n              <span class=\"input-group-text\" id=\"basic-addon2\">cái</span>\r\n            </div>\r\n          </div>\r\n          <button class=\"btn btn-success\" (click)=\"AddToCart()\">Thêm vào giỏ hàng</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DoAn1';
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "SyPZ":
/*!*********************************************!*\
  !*** ./src/app/manage/manage.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Product/product-list/product-list.component */ "bVPI");
/* harmony import */ var _Product_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Product/product-item/product-item.component */ "zROK");
/* harmony import */ var _Product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Product/product-detail/product-detail.component */ "yr4X");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _Cart_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Cart/cart-list/cart-list.component */ "PG7V");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage/manage.component */ "/q8S");
/* harmony import */ var _Manage_manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Manage/manage-product/manage-product.component */ "i4//");
/* harmony import */ var _manage_manage_product_add_manage_product_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./manage/manage-product-add/manage-product-add.component */ "fwAn");
/* harmony import */ var _manage_manage_product_edit_manage_product_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manage/manage-product-edit/manage-product-edit.component */ "KctG");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _Product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_7__["ProductListComponent"],
                _Product_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemComponent"],
                _Product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_10__["CartComponent"],
                _Cart_cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_11__["CartListComponent"],
                _manage_manage_component__WEBPACK_IMPORTED_MODULE_12__["ManageComponent"],
                _Manage_manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_13__["ManageProductComponent"],
                _manage_manage_product_add_manage_product_add_component__WEBPACK_IMPORTED_MODULE_14__["ManageProductAddComponent"],
                _manage_manage_product_edit_manage_product_edit_component__WEBPACK_IMPORTED_MODULE_15__["ManageProductEditComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "ZkCA":
/*!*****************************************************************!*\
  !*** ./src/app/Product/product-list/product-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "bVPI":
/*!****************************************************************!*\
  !*** ./src/app/Product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list.component.html */ "9SCu");
/* harmony import */ var _product_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component.css */ "ZkCA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () { };
    ProductListComponent.ctorParameters = function () { return []; };
    ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-product-list",
            template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_product_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


var CartService = /** @class */ (function () {
    function CartService() {
        this.cartItems = [];
    }
    CartService.prototype.getCartItems = function () {
        return this.cartItems;
    };
    CartService.prototype.addCartItem = function (cartItem) {
        this.cartItems.push(cartItem);
    };
    CartService.prototype.editCartItem = function (cartItem) {
        this.cartItems.splice(this.cartItems.findIndex(function (x) { return x.product.id == cartItem.product.id; }), 1, cartItem);
    };
    CartService.prototype.deleteCartItem = function (cartItem) {
        this.cartItems.splice(this.cartItems.findIndex(function (x) { return x.product.id == cartItem.product.id; }), 1);
    };
    CartService.ctorParameters = function () { return []; };
    CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.component.html */ "M2Tr");
/* harmony import */ var _cart_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component.css */ "1PcV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.ctorParameters = function () { return []; };
    CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-cart',
            template: _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_cart_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "DN7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ctorParameters = function () { return []; };
    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-header',
            template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "fp6D":
/*!****************************************************************************!*\
  !*** ./src/app/manage/manage-product-add/manage-product-add.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcHJvZHVjdC1hZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "fwAn":
/*!***************************************************************************!*\
  !*** ./src/app/manage/manage-product-add/manage-product-add.component.ts ***!
  \***************************************************************************/
/*! exports provided: ManageProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductAddComponent", function() { return ManageProductAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_product_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-product-add.component.html */ "3Sp1");
/* harmony import */ var _manage_product_add_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-product-add.component.css */ "fp6D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/Products */ "N4U/");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







var ManageProductAddComponent = /** @class */ (function () {
    function ManageProductAddComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.product = new src_app_models_Products__WEBPACK_IMPORTED_MODULE_4__["Product"]();
    }
    ManageProductAddComponent.prototype.ngOnInit = function () { };
    ManageProductAddComponent.prototype.AddProduct = function () {
        this.productService.AddProduct(this.product);
        this.router.navigate(["/manage"]);
    };
    ManageProductAddComponent.ctorParameters = function () { return [
        { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ManageProductAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-manage-product-add",
            template: _raw_loader_manage_product_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_manage_product_add_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ManageProductAddComponent);
    return ManageProductAddComponent;
}());



/***/ }),

/***/ "i4//":
/*!*******************************************************************!*\
  !*** ./src/app/Manage/manage-product/manage-product.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageProductComponent", function() { return ManageProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manage_product_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manage-product.component.html */ "iyWq");
/* harmony import */ var _manage_product_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-product.component.css */ "LxfV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");





var ManageProductComponent = /** @class */ (function () {
    function ManageProductComponent(productService) {
        this.productService = productService;
    }
    ManageProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.GetProducts().subscribe(function (products) {
            var arr = [];
            Object.keys(products).forEach(function (key) {
                arr.push(products[key]);
            });
            _this.products = arr;
        });
    };
    ManageProductComponent.prototype.DeleteProduct = function (id) {
        for (var i = 0; i < this.products.length; i++) {
            var element = this.products[i];
            if (element.id == id) {
                this.productService.DeleteProduct(element);
                break;
            }
        }
        this.products = this.products.filter(function (p) { return p.id != id; });
    };
    ManageProductComponent.ctorParameters = function () { return [
        { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
    ]; };
    ManageProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-manage-product",
            template: _raw_loader_manage_product_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_manage_product_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ManageProductComponent);
    return ManageProductComponent;
}());



/***/ }),

/***/ "iyWq":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Manage/manage-product/manage-product.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div>\r\n  <a [routerLink]=\"['/manage/product/add']\" type=\"button\"><button>Thêm</button></a>\r\n  <ul>\r\n    <li *ngFor=\"let product of products\">\r\n      <a [routerLink]=\"[ '/manage/product/' + product.id ]\">\r\n        {{product.id}} - {{product.name}} - {{product.size}} - {{product.price}}đ\r\n      </a>&nbsp;-&nbsp;\r\n      <button (click)=\"DeleteProduct(product.id)\">Xoá</button>\r\n    </li>\r\n  </ul>\r\n</div>-->\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <b>All of product :</b>\r\n    <button [routerLink]=\"['/manage/product/add']\" class=\"btn btn-success float-right\"><i class=\"fa fa-pencil\"></i></button>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr class=\"text-center\">\r\n            <th>Image</th>\r\n            <th>ID</th>\r\n            <th>Name</th>\r\n            <th>Size</th>\r\n            <th>Price</th>\r\n            <th></th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <!-- <tr class=\"text-center\" *ngFor=\"let product of products\" [routerLink]=\"[ '/manage/product/' + product.id ]\"> -->\r\n          <tr class=\"text-center\" *ngFor=\"let product of products\">\r\n            <td>\r\n              <img [src]=\"product.image\" class=\"\" [alt]=\"product.name\" style=\"max-width: 200px;\">\r\n            </td>\r\n            <td>{{ product.id }}</td>\r\n            <td>{{product.name}}</td>\r\n            <td>{{product.size}}</td>\r\n            <td>{{product.price | currency: 'VND'}}</td>\r\n            <td>\r\n              <a class=\"btn btn-info\" [routerLink]=\"[ '/manage/product/' + product.id ]\">Edit</a>\r\n              <button (click)=\"DeleteProduct(product.id)\" class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "k8ad":
/*!********************************************************!*\
  !*** ./src/app/Cart/cart-list/cart-list.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"\" routerLink=\"/\" style=\"display: block; margin-left: auto;   margin-right: auto\">\r\n    <img class=\"d-inline-block align-middle\" style=\"width:auto; height:45px; \" src=\"https://i.redd.it/cyrqysz0z3o21.png\">\r\n    PewDiePie\r\n  </div>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse row text-center\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav col-12 row\">\r\n      <li class=\"col-lg-3\"></li>\r\n      <li class=\"nav-item active col-md-12 col-lg-2\">\r\n        <a class=\"nav-item nav-link active\" [routerLink]=\"[ '/' ]\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item col-md-12 col-lg-2\">\r\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/cart' ]\">Cart</a>\r\n      </li>\r\n      <li class=\"nav-item col-md-12 col-lg-2\">\r\n        <a class=\"nav-item nav-link\" [routerLink]=\"[ '/manage' ]\">Manage Product</a>\r\n      </li>\r\n      <li class=\"col-lg-3\"></li>\r\n    </ul>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ "kolE":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Cart/cart-list/cart-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div>\r\n  Danh sách giỏ hàng:\r\n  <ul>\r\n    <li *ngFor=\"let item of cartItems\">\r\n      {{item.product.name}} - {{item.product.price}} * {{item.quantity}};\r\n    </li>\r\n  </ul>\r\n</div>-->\r\n<div class=\"card text-center\">\r\n  <div class=\"card-header\">\r\n    Danh sách giỏ hàng:\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <li *ngFor=\"let item of cartItems\">\r\n      {{item.product.name}} - {{item.product.price}} * {{item.quantity}};\r\n    </li>\r\n  </div>\r\n  <div class=\"card-footer text-muted\">\r\n    #####\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "n5Nt":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/manage.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <p class=\"container text-center\" style=\"font-weight:inherit; font-style:normal; font-size:24PX\">QUẢN LÝ</p>\r\n  <app-manage-product></app-manage-product>\r\n</div>\r\n");

/***/ }),

/***/ "nuL2":
/*!*********************************************************************!*\
  !*** ./src/app/Product/product-detail/product-detail.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "oHTq":
/*!*****************************************************************!*\
  !*** ./src/app/Product/product-item/product-item.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "rFr4":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage/manage-product-edit/manage-product-edit.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"container\">\r\n  <h1>Sửa sản phẩm</h1>\r\n  <div>\r\n    <label for=\"productId\">Mã sản phẩm: </label>\r\n    <input type=\"text\" name=\"productId\" id=\"productId\" [(ngModel)]=\"product.id\" [value]=\"product.id\">\r\n  </div>\r\n  <div>\r\n    <label for=\"productName\">Tên sản phẩm: </label>\r\n    <input type=\"text\" name=\"productName\" id=\"productName\" [(ngModel)]=\"product.name\" [value]=\"product.name\">\r\n  </div>\r\n  <div>\r\n    <label for=\"productSize\">Size: </label>\r\n    <input type=\"text\" name=\"productSize\" id=\"productSize\" [(ngModel)]=\"product.size\" [value]=\"product.size\">\r\n  </div>\r\n  <div>\r\n    <label for=\"productPrice\">Giá: </label>\r\n    <input type=\"number\" name=\"productPrice\" id=\"productPrice\" [(ngModel)]=\"product.price\" [value]=\"product.price\">\r\n  </div>\r\n  <div>\r\n    <label for=\"productImg\">Link ảnh: </label>\r\n    <input type=\"text\" name=\"productImg\" id=\"productImg\" [(ngModel)]=\"product.image\" [value]=\"product.image\">\r\n  </div>\r\n  <button (click)=\"EditProduct()\">Sửa</button>\r\n</div>-->\r\n\r\n<p class=\"container text-center\" style=\"font-weight:inherit; font-style:normal; font-size:24PX\">Edit Product</p>\r\n<table>\r\n  <tr>\r\n    <th><img [src]=\"product.image\" class=\"\" [alt]=\"product.name\"></th>\r\n    <td>\r\n      <form class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"productId\">Code:</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"productId\" id=\"productId\" [(ngModel)]=\"product.id\" [value]=\"product.id\">\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"productName\">Name:</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"productName\" id=\"productName\" [(ngModel)]=\"product.name\" [value]=\"product.name\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"productSize\">Size:</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"productSize\" id=\"productSize\" [(ngModel)]=\"product.size\" [value]=\"product.size\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"productPrice\">Price:</label>\r\n            <input type=\"number\" class=\"form-control\" name=\"productPrice\" id=\"productPrice\" [(ngModel)]=\"product.price\" [value]=\"product.price\">\r\n          </div>\r\n          <div class=\"form-group col-md-12\">\r\n            <label for=\"productImg\">Image link: </label>\r\n            <input type=\"text\" class=\"form-control\" name=\"productImg\" id=\"productImg\" [(ngModel)]=\"product.image\" [value]=\"product.image\">\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-10\">\r\n            <button (click)=\"EditProduct()\" class=\"btn btn-success\">Save</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </td>\r\n  </tr>\r\n</table>\r\n\r\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product/product-list/product-list.component */ "bVPI");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage/manage.component */ "/q8S");
/* harmony import */ var _Product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Product/product-detail/product-detail.component */ "yr4X");
/* harmony import */ var _manage_manage_product_edit_manage_product_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage/manage-product-edit/manage-product-edit.component */ "KctG");
/* harmony import */ var _manage_manage_product_add_manage_product_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage/manage-product-add/manage-product-add.component */ "fwAn");









var routes = [
    { path: "", component: _Product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"] },
    { path: "cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: "manage", component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManageComponent"] },
    { path: "product/:id", component: _Product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_6__["ProductDetailComponent"] },
    { path: "manage/product/add", component: _manage_manage_product_add_manage_product_add_component__WEBPACK_IMPORTED_MODULE_8__["ManageProductAddComponent"] },
    { path: "manage/product/:id", component: _manage_manage_product_edit_manage_product_edit_component__WEBPACK_IMPORTED_MODULE_7__["ManageProductEditComponent"] },
    { path: "**", redirectTo: "/" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "wdQb":
/*!************************************!*\
  !*** ./src/app/models/CartItem.ts ***!
  \************************************/
/*! exports provided: CartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItem", function() { return CartItem; });
/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products */ "N4U/");

var CartItem = /** @class */ (function () {
    function CartItem(product, quantity) {
        this.product = product || new _Products__WEBPACK_IMPORTED_MODULE_0__["Product"]();
        this.quantity = quantity || 0;
    }
    return CartItem;
}());



/***/ }),

/***/ "yr4X":
/*!********************************************************************!*\
  !*** ./src/app/Product/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-detail.component.html */ "RENT");
/* harmony import */ var _product_detail_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-detail.component.css */ "nuL2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_app_models_Products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/Products */ "N4U/");
/* harmony import */ var src_app_models_CartItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/CartItem */ "wdQb");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");









var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.product = new src_app_models_Products__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        this.quantity = 0;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.productService.GetProducts().subscribe(function (products) {
                for (var key in products) {
                    if (products.hasOwnProperty(key)) {
                        var product = products[key];
                        if (product.id == params.id) {
                            _this.product = product;
                        }
                    }
                }
            });
        });
    };
    ProductDetailComponent.prototype.AddToCart = function () {
        var cartItem = new src_app_models_CartItem__WEBPACK_IMPORTED_MODULE_7__["CartItem"](this.product, this.quantity);
        this.cartService.addCartItem(cartItem);
    };
    ProductDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] }
    ]; };
    ProductDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-product-detail",
            template: _raw_loader_product_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_product_detail_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "zROK":
/*!****************************************************************!*\
  !*** ./src/app/Product/product-item/product-item.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-item.component.html */ "R+OX");
/* harmony import */ var _product_item_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-item.component.css */ "oHTq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");





var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent(productService) {
        this.productService = productService;
    }
    ProductItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.GetProducts().subscribe(function (products) {
            var arr = [];
            Object.keys(products).forEach(function (key) {
                arr.push(products[key]);
            });
            _this.products = arr;
        });
    };
    ProductItemComponent.ctorParameters = function () { return [
        { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
    ]; };
    ProductItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-product-item",
            template: _raw_loader_product_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_product_item_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ProductItemComponent);
    return ProductItemComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map