import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './Users/user-detail.component';
import { MustMatchDirective } from './directives/must-match.directive';
import { LoginComponent } from './Login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CommonService } from './services/common.service';
import { ProductDetailComponent } from './product/product-detail.component';
import { HomeComponent } from './home/home.component';
import { DialogComponent } from './common/dialog.component';
import { CartDetailComponent } from './cart/cart-detail.component';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuBarComponent,
    HomeComponent,
    UserDetailComponent,
    ProductDetailComponent,
    CartDetailComponent,
    MustMatchDirective,
    DialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    NgImageSliderModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'Home', component: HomeComponent, pathMatch: 'full' },
      { path: 'Users', component: UserDetailComponent },
      { path: 'Products', component: ProductDetailComponent },
      { path: 'Cart', component: CartDetailComponent },
      { path: 'Logout', component: LoginComponent },
    ]),
  ],
  providers: [CommonService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]

})
export class AppModule { }
