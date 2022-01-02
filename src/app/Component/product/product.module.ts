import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserAuthGuard } from '../user/login/user-auth.guard';
import { FormsModule } from '@angular/forms';
import { ViewallproductsComponent } from './viewallproducts/viewallproducts.component';
import { EditeproductComponent } from './editeproduct/editeproduct.component';

const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component: HeaderComponent  },
  {path:'create', component: CreateproductComponent,canActivate:[UserAuthGuard]},
  {path:'allproducts', component: ViewallproductsComponent},
  {path:'edite/:pid', component: EditeproductComponent ,canActivate:[UserAuthGuard]} ,
  // {path:'cart', component: UsercardComponent ,canActivate:[UserAuthGuard]} ,
  // {path:'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    CreateproductComponent,
    ViewallproductsComponent,
    EditeproductComponent
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(routes), 
      FormsModule
  ]
})
export class ProductModule { }
