import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../ViewModels/iproduct';
import { ShoppingCartItems } from '../ViewModels/shopping-cart-items';
import { ProductfromapiService } from './productfromapi.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateusercartService {
public mycart:ShoppingCartItems[]=[];
public productList = new BehaviorSubject<any>([]);
public cartitemtotalprise = new BehaviorSubject<{totalitem:number,totalprise:number}>({totalitem:0,totalprise:0});
public totalcartprice:number=0;
public totalcartitem:number=0;
//private newpro:IProduct={} as IProduct;
  constructor(private ProductfromapiServicee:ProductfromapiService) { }

fillusercartitems(card:ShoppingCartItems[]) {
  this.mycart = card;
  this.calcTotalCartPriceitem();
this.updatesubscriber();
  console.log("inside services"+card.length);
  //this.mycart.push(item);
}
getcartitems()//:Observable<ShoppingCartItems[]>
  {
    return this.cartitemtotalprise.asObservable();
  }
  getusercart()//:Observable<ShoppingCartItems[]>
  {
    return this.productList.asObservable();
  }
  removeCartItem(product: ShoppingCartItems){
    this.mycart.map((a:ShoppingCartItems, index:any)=>{
      if(product.ID=== a.ID){
        this.mycart.splice(index,1);
      }
    })
    this.updateProductquntity(product);
    this.updatesubscriber();
  }
  updateProductquntity(item: ShoppingCartItems){
    //this.newpro={id:item.ID,Name:item.Name,Img:item.Img,Price:item.price,Quantity:item.quantity}
    this.ProductfromapiServicee.updateproductQuantity(item.ID,item.quantity).subscribe({
      next:(res)=>{console.log(res);}
    });
  }
removeAllCart(){
    this.mycart = [];
    this.totalcartitem=0;
    this.totalcartprice=0;
    this.updatesubscriber();
  }
calcTotalCartPriceitem(){
  this.totalcartitem=this.mycart.length;
  var sum:number=0;
  let len=(this.mycart).length;
  console.log(len);
  for (let i = 0; i <len ; i++) {
    let price:number=parseInt(this.mycart[i].price.toString());
    let quan:number=parseInt(this.mycart[i].quantity.toString());
    sum+=(price*quan);
    console.log(sum);
      //sum+=( Number(this.headercard[i].price)*Number(this.headercard[i].quantity));
  }
  this.totalcartprice=sum;
}
updatesubscriber(){
  this.productList.next(this.mycart);
  this.cartitemtotalprise.next({'totalitem':this.totalcartitem,'totalprise':this.totalcartprice})
}
}
