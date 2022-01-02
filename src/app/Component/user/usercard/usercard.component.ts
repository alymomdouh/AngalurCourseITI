import { Component, OnInit } from '@angular/core';
import { ProductfromapiService } from 'src/app/Services/productfromapi.service';
import { UpdateusercartService } from 'src/app/Services/updateusercart.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ShoppingCartItems } from 'src/app/ViewModels/shopping-cart-items';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss']
})
export class UsercardComponent implements OnInit {
  cart:ShoppingCartItems[]=[];
  totalcartprice:number=0;
  totalcartitem:number=0;
  //private newpro:IProduct={} as IProduct;
  constructor(private usercartservice:UpdateusercartService,
    private ProductfromapiServicee:ProductfromapiService) { }

  ngOnInit(): void {
    //this.cart=this.usercartservice.getusercart();
    //console.log("before");
    this.usercartservice.getusercart().subscribe({
      next:(cartlist)=>{this.cart=cartlist;console.log("inside subscribe"+cartlist.length)},
    });
    this.usercartservice.getcartitems().subscribe({
      next:(cartitems)=>{
        this.totalcartprice=cartitems.totalprise;
        this.totalcartitem=cartitems.totalitem;
        console.log("dddddaaa"+cartitems.totalprise)
      },
    });
  }
  removeItem(item:ShoppingCartItems){
    //this.newpro={id:item.ID,Name:item.Name,Img:item.Img,Price:item.price,Quantity:item.quantity}
    //this.ProductfromapiServicee.updateProduct(this.newpro).subscribe();
    this.usercartservice.removeCartItem(item);
  }
emptyallcard(){
  this.usercartservice.removeAllCart();
}
}
