import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NftComponent } from './components/homepage/nft/nft.component';
import { StepsIllustrationsComponent } from './components/homepage/steps-illustrations/steps-illustrations.component';
import { CategoriesComponent } from './components/homepage/categories/categories.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsCardComponent } from './components/products/products-card/products-card.component';
import { BannerComponent } from './components/homepage/banner/banner.component';
import { UploadPropComponent } from './components/user/upload-prop/upload-prop.component';
import { AnnoncesComponent } from './components/explore/explore.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { PublicProfileComponent } from './components/user/public-profile/public-profile.component';
import { ProductComponent } from './components/user/dashboard/product/product.component';
import { TransactionComponent } from './components/user/dashboard/transaction/transaction.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FaqComponent } from './components/faq/faq.component';

import {AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AboutusComponent } from './components/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StepsIllustrationsComponent,
    CategoriesComponent,
    HomepageComponent,
    ProductsCardComponent,
    UploadPropComponent,
    AnnoncesComponent,
    DashboardComponent,
    ProductDetailsComponent,
    PublicProfileComponent,
    ProductComponent,
    TransactionComponent,
    FaqComponent,
    AboutusComponent,
    BannerComponent,
    NftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    AngularFireModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
