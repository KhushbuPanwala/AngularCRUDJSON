import { Component, Inject, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { ProductDetail } from '../model/product-detail.model';
import { CartDetail } from '../model/cart-detail.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  imageObject: Array<object> = [
    {
      image: 'assets/dart.jfif',
      thumbImage: 'assets/dart.jfif',
    },
    {
      image: 'assets/chess.jfif',
      thumbImage: 'assets/chess.jfif',
    },
    {
      image: 'assets/carrom.jpg',
      thumbImage: 'assets/carrom.jpg',
    },
    {
      image: 'assets/ludo.jfif',
      thumbImage: 'assets/ludo.jfif',
    },
    {
      image: 'assets/sanke ladder.jfif',
      thumbImage: 'assets/sanke ladder.jfif',
    },
    {
      image: 'assets/bowlingpin.jfif',
      thumbImage: 'assets/bowlingpin.jfif',
    },
    {
      image: 'assets/soccer.jfif',
      thumbImage: 'assets/soccer.jfif',
    },
    {
      image: 'assets/snooker.jfif',
      thumbImage: 'assets/snooker.jfif',
    }
  ]

  productDetails: ProductDetail[];

  constructor(private commonService: CommonService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProducts();
  }
  /**
  *get user details  
  */
  getProducts() {
    this.commonService.getAllProductDetails().subscribe(data => {
      this.productDetails = data;
      this.productDetails.forEach(product => {
        product.url = product.imageName !== "" ? "./assets/" + product.imageName : "";
      });
    });
  }

  plus(productId) {
    this.productDetails.forEach(product => {
      if (product.id === productId) {
        ++product.quantity;
        product.price = product.price * product.quantity;
      }
    });
  }

  minus(productId) {
    this.productDetails.forEach(product => {
      if (product.id === productId) {
        --product.quantity;
        product.price = product.price * product.quantity;
      }
    });
  }

  action: string;
  message: string = "";
  cartDetail = new CartDetail();
  cartDetails: CartDetail[];
  isProductExist: boolean = false;

  addCart(productDetail) {
    let userId = localStorage.getItem('currentUser');
    this.commonService.getCartDetail(Number(userId)).subscribe(data => {
      this.cartDetails = data;
      this.cartDetails.forEach(cart => {
        if (cart.productId === productDetail.id) {
          this.isProductExist = true;
        }
      });

      if (this.isProductExist) {
        this.cartDetail.userId = Number(userId);
        this.cartDetail.productId = productDetail.id;
        this.cartDetail.productName = productDetail.productName;
        this.cartDetail.quantity = productDetail.quantity;
        this.cartDetail.price = productDetail.price;
        this.commonService.updateCartDetail(this.cartDetail).subscribe(data => {
          if (data) {
            this.message = "Record Updated Successfully!!!";
            this._snackBar.open(this.message, this.action, {
              duration: 2000,
              panelClass: ['snack-bar']
            });
          }
        });

      }
      else {
        //add new item in cart
        this.cartDetail.userId = Number(userId);
        this.cartDetail.productId = productDetail.id;
        this.cartDetail.productName = productDetail.productName;
        this.cartDetail.quantity = productDetail.quantity;
        this.cartDetail.price = productDetail.price;
        this.commonService.addCartDetail(this.cartDetail).subscribe(data => {
          if (data) {
            this.message = "Record Added Successfully!!!";
            this._snackBar.open(this.message, this.action, {
              duration: 2000,
              panelClass: ['snack-bar']
            });
          }
        });
      }
    });
  }
}
