import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { ProductsComponent } from './Component/products/products.component';
import { FooterComponent } from './Component/footer/footer.component';
import { MakeshadowDirective } from './Directives/makeshadow.directive';
import { GetfulldatePipe } from './Pipes/getfulldate.pipe';
import { CreditcardPipe } from './Pipes/creditcard.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/PageComponent/home/home.component';
import { AboutusComponent } from './Component/PageComponent/aboutus/aboutus.component';
import { ContactusComponent } from './Component/PageComponent/contactus/contactus.component';
import { NotFounPageComponent } from './Component/PageComponent/not-foun-page/not-foun-page.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    MakeshadowDirective,
    GetfulldatePipe,
    CreditcardPipe,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    NotFounPageComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
