import { Component, OnInit } from '@angular/core';
import { CateogryfromapiServicesService } from 'src/app/Services/cateogryfromapi-services.service';
import { UpdateusercartService } from 'src/app/Services/updateusercart.service';
//import { Console } from 'console';
import { ICategory } from 'src/app/ViewModels/icategory';
import { ShoppingCartItems } from 'src/app/ViewModels/shopping-cart-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
//public searchTerm !: string;
//SelectedCategory:string="";
selectedCatIDinheader:number=0;
headercard:ShoppingCartItems[]=[];
totalcartprice:number=0;
totalcartitem:number=0;

categories:ICategory[]=[];//=[{ID:1,Name:"mobiles"},{ID:2,Name:"laptops"},{ID:3,Name:"pcs"},{ID:4,Name:"playstations"}];
constructor(private Cateogryfromapiservice:CateogryfromapiServicesService,
            private usercartservice:UpdateusercartService) { }
  ngOnInit(): void {
    this.Cateogryfromapiservice.getAllCategories().subscribe({
      next:(data)=>this.categories=data,
    });
    /// from serverces api cart
    this.usercartservice.getusercart().subscribe({
      next:(cartlist)=>{this.headercard=cartlist;console.log("inside subscribe"+cartlist.length)},
    });
    this.usercartservice.getcartitems().subscribe({
      next:(cartitems)=>{
        this.totalcartprice=cartitems.totalprise;
        this.totalcartitem=cartitems.totalitem;
        //console.log("dddddaaa"+cartitems.totalprise)
      },
    });
  }

// onOptionsSelected(value:string){
//         this.SelectedCategory=value;
//     }
whenchangemycardparent(cart:ShoppingCartItems[]){
  //this.headercard=cart;
  //this.calcTotalCartPriceitem();
}
calcTotalCartPriceitem(){
  this.totalcartitem=this.headercard.length;
  var sum:number=0;
  let len=(this.headercard).length;
  console.log(len);
  for (let i = 0; i <len ; i++) {
    let price:number=parseInt(this.headercard[i].price.toString());
    let quan:number=parseInt(this.headercard[i].quantity.toString());
    sum+=(price*quan);
    console.log(sum);
      //sum+=( Number(this.headercard[i].price)*Number(this.headercard[i].quantity));
  }
  this.totalcartprice=sum;
}
}
