import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserAuthGuard } from './login/user-auth.guard';
import { UsercardComponent } from './usercard/usercard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', redirectTo:'/User/Myprofile', pathMatch:'full'},
  // {path:'Editprofile', component: EditProfileComponent  },
  // {path:'Myprofile', component: ViewProfileComponent},
  {path:'Myprofile', component: ViewProfileComponent,canActivate:[UserAuthGuard]},
  {path:'Editprofile', component: EditProfileComponent ,canActivate:[UserAuthGuard]} ,
  {path:'cart', component: UsercardComponent ,canActivate:[UserAuthGuard]} ,
  {path:'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent,
    UsercardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
