import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { AboutusComponent } from './Component/PageComponent/aboutus/aboutus.component';
import { ContactusComponent } from './Component/PageComponent/contactus/contactus.component';
import { HomeComponent } from './Component/PageComponent/home/home.component';
import { NotFounPageComponent } from './Component/PageComponent/not-foun-page/not-foun-page.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { ProductsComponent } from './Component/products/products.component';

const routes: Routes = [ //First-match wins
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'products', component: HeaderComponent},
  {path:'products/:pid/:pcount', component:ProductDetailsComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'aboutus', component: AboutusComponent},
   //// a-path-lazy
    {
      path: 'user',// any name not only module name
      loadChildren: () => import('src/app/Component/user/user.module').then(m => m.UserModule)
    },
    {
      path: 'product',// any name not only module name
      loadChildren: () => import('src/app/Component/product/product.module').then(m => m.ProductModule)
    },
  {path:"**", component: NotFounPageComponent} //this named wild_card_path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
