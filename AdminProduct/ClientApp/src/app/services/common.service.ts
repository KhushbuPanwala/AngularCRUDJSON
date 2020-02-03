import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetail } from '../model/user-detail.model';
import { ProductDetail } from '../model/product-detail.model';
import { CartDetail } from '../model/cart-detail.model';

@Injectable()
export class CommonService {

  //User Detail
  public getAllUserDetailsUrl = "/api/UserDetail/GetUserDetails";
  public getUserDetailByIdUrl = "/api/UserDetail/GetUserDetailById";
  public addUserDetailByIdUrl = "/api/UserDetail/AddUser";
  public updateUserDetailUrl = "/api/UserDetail/UpdateUser";
  public deleteUserDetailUrl = "/api/UserDetail/DeleteUser";

  //Product Detail
  public getAllProductDetailsUrl = "/api/ProductDetail/GetAllProductDetail";
  public getProductDetailByIdUrl = "/api/ProductDetail/GetProductDetailById";
  public addProductDetailByIdUrl = "/api/ProductDetail/AddProductDetail";
  public updateProductDetailUrl = "/api/ProductDetail/UpdateProductDetail";
  public deleteProductDetailUrl = "/api/ProductDetail/DeleteProductDetail";
  public uploadProdutcImageUrl = "/api/ProductDetail/UploadProductImage";

  //Cart Detail
  public getCartDetailUrl = "/api/CartDetail/GetCartDetail";
  public addCartDetailUrl = "/api/CartDetail/AddCartDetail";
  public updateCartDetailUrl = "/api/CartDetail/UpdateCartDetail";
  public deleteCartDetailUrl = "/api/CartDetail/DeleteCartDetail";


  constructor(public http: HttpClient) { }

  //Login /Authentication 
  login(userId: number) {
    localStorage.setItem('currentUser', JSON.stringify(userId));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }



  //User Detail
  getUserDetails() {
    return this.http.get<any>(this.getAllUserDetailsUrl);
  }

  getUserDetailById(id: number) {
    return this.http.post<any>(this.getUserDetailByIdUrl, id);
  }

  addUser(userDetail: UserDetail) {
    return this.http.post<any>(this.addUserDetailByIdUrl, userDetail);
  }

  updateUser(userDetail: UserDetail) {
    return this.http.post<any>(this.updateUserDetailUrl, userDetail);
  }

  deleteUser(id: number) {
    return this.http.post<any>(this.deleteUserDetailUrl, id);
  }

  //Product Detail
  getAllProductDetails() {
    return this.http.get<any>(this.getAllProductDetailsUrl);
  }

  getProductDetailById(id: number) {
    return this.http.post<any>(this.getProductDetailByIdUrl, id);
  }

  addProduct(productDetail: ProductDetail) {
    return this.http.post<any>(this.addProductDetailByIdUrl, productDetail);
  }

  updateProduct(productDetail: ProductDetail) {
    return this.http.post<any>(this.updateProductDetailUrl, productDetail);
  }

  deleteProduct(id: number) {
    return this.http.post<any>(this.deleteProductDetailUrl, id);
  }
  uploadProductImage(uploadData) {
    return this.http.post(this.uploadProdutcImageUrl, uploadData);
  }

  //cart Detail
  getCartDetail(id: number) {
    return this.http.post<any>(this.getCartDetailUrl, id);
  }

  addCartDetail(cartDetail: CartDetail) {
    return this.http.post<any>(this.addCartDetailUrl, cartDetail);
  }

  updateCartDetail(cartDetail: CartDetail) {
    return this.http.post<any>(this.updateCartDetailUrl, cartDetail);
  }

  deleteCartDetail(id: number) {
    return this.http.post<any>(this.deleteCartDetailUrl, id);
  }
}
