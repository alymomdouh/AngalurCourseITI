import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductfromapiService } from 'src/app/Services/productfromapi.service';
import { ProductmemorydataService } from 'src/app/Services/productmemorydata.service';
import { UpdateusercartService } from 'src/app/Services/updateusercart.service';
import { DiscountOffers } from 'src/app/ViewModels/discount-offers';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ShoppingCartItems } from 'src/app/ViewModels/shopping-cart-items';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges,OnDestroy {
// @Input() SelectedCategory:string="";
//@ViewChild('thenBlock', {static: true}) thenBlock: TemplateRef<any>|null = null;
//@ViewChild('secondaryBlock', {static: true}) secondaryBlock: TemplateRef<any>|null = null;
@Input() SelectedCategory:number=0;
needquantityvalue:number=0;
changedproductidquantity:number=0;
  //Discount:DiscountOffers;
  public ClientName:string="";
  ProductList:IProduct[]=[];
  mycard:ShoppingCartItems[]=[];
  @Output() whenchangemycard: EventEmitter<ShoppingCartItems[]>;// the event
  newProductList:IProduct[]=[];
  //showtable:Boolean=true;
  //mydate:string="29909011509345";
  //todayDate= Date.now();
  //mycreditcard:string="1234567891234567";
//public categories:ICategory[]=[{ID:1,Name:"mobiles"},{ID:2,Name:"laptops"},{ID:3,Name:"pcs"},{ID:4,Name:"playstations"}];
  //constructor()
  constructor(private productService:ProductmemorydataService,private router:Router,
    private usercartservice:UpdateusercartService,private ProductfromapiServicee:ProductfromapiService)
    {
      this.whenchangemycard=new EventEmitter<ShoppingCartItems[]>();
      /*
        // //this.Discount=DiscountOffers['15%'];
        // this.ClientName="new Client Name";
        // this.ProductList=[
        //           {ID:1,Name:"mobile1",Quantity:10,Price :10000,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
        //           {ID:2,Name:"mobile2",Quantity:2,Price :5000,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
        //           {ID:3,Name:"mobile3",Quantity:10,Price :1000,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
        //           {ID:4,Name:"mobile4",Quantity:20,Price :200,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
        //           {ID:5,Name:"mobile5",Quantity:5,Price :14499.99,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
        //           {ID:6,Name:"mobile6",Quantity:0,Price :20000,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
        //           {ID:7,Name:"laptop1",Quantity:10,Price :200,Img :"https://picsum.photos/id/1/100/100",CateogryID:2,rate:0},
        //           {ID:8,Name:"laptop2",Quantity:5,Price :200,Img :"https://picsum.photos/id/1/100/100",CateogryID:2,rate:0},
        //           {ID:9,Name:"pc1",Quantity:10,Price :50000,Img :"https://picsum.photos/id/1/100/100",CateogryID:3,rate:0},
        //           {ID:10,Name:"pc2",Quantity:10,Price :40000,Img :"https://picsum.photos/id/1/100/100",CateogryID:3,rate:0},

        //                 ];
        // // this.newProductList=this.ProductList.filter(i=>i.CateogryID==1);
        //   this.newProductList=Array.from(this.ProductList);
        */
    }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    //this.usercartservice.fillusercartitems(this.mycard);
  }
  ngOnChanges(): void {
    if(this.SelectedCategory != 0){
      //this.newProductList=this.ProductList.filter(i=>i.CateogryID==Number(this.SelectedCategory));
        //this.newProductList= this.productService.getProductsByCatID(Number(this.SelectedCategory));
        console.log(this.SelectedCategory);
        this.ProductfromapiServicee.getProductCatID(this.SelectedCategory).subscribe({
          next:(data)=>{this.newProductList=data ;console.log(data)}
        });
    }else if(this.SelectedCategory == 0){
     // this.newProductList=Array.from(this.ProductList);
     // this.newProductList= this.productService.getProductsByCatID(0);
    this.ProductfromapiServicee.getAllProducts().subscribe({
          next:(data)=>{this.newProductList=data;console.log(data)}
        });
    }
  }

    ngOnInit(): void {
    //this.newProductList=this.productService.getAllProducts();
    this.ProductfromapiServicee.getAllProducts().subscribe({
          next:(data)=>this.newProductList=data
        });
  }
  /*
// onOptionsSelected(value:string){
//       if(!isNaN(Number(value))&&Number(value)>=1){
//           this.newProductList=this.ProductList.filter(i=>  i.CateogryID==Number(value) );
//       }
//     }
*/
    addtocart(product: IProduct){
    if(product.Quantity>0){
          product.Quantity--;
      }
  }
  decreaseNeedQuantity(Product:IProduct,needquantityvalue1:string){
      let needquantityvaluenumber=+needquantityvalue1;
      if((Product.Quantity>0)&&(needquantityvaluenumber>0)&&(Product.Quantity>needquantityvaluenumber)){
          this.needquantityvalue=--needquantityvaluenumber;
          this.changedproductidquantity=Product.id;
      }
  }
  increaseNeedQuantity(Product:IProduct,needquantityvalue2:string){
    let needquantityvaluenumber=+needquantityvalue2;
      if((Product.Quantity>0)&&(needquantityvaluenumber>=0)&&(Product.Quantity>needquantityvaluenumber)){
          this.needquantityvalue=++needquantityvaluenumber;
          this.changedproductidquantity=Product.id;
      }
  }
  updateshopincard(Product:IProduct,needquantityvalue2:string,operation:string){
    let needquantityvaluenumber=parseInt(needquantityvalue2);
      let newproquant=0;
      if((operation=='+')&&(Product.Quantity>0)&&(Product.Quantity>=needquantityvaluenumber))
      {
        let oldpro=this.mycard.find(i=>i.ID==Product.id);
        if(oldpro!=null){
          newproquant=(Number)(oldpro.quantity)+needquantityvaluenumber;
          let index=this.mycard.indexOf(oldpro);
          this.mycard[index].quantity=newproquant;
          }else{
          this.mycard.push({ID:Product.id,Name:Product.Name,price:Product.Price,quantity:needquantityvaluenumber,Img:Product.Img});
        }
        Product.Quantity-=needquantityvaluenumber;
      }
        else if((operation=='-')&&(needquantityvaluenumber>0)){
      let oldpro=this.mycard.find(i=>i.ID==Product.id);
      //oldproqun:number=0
        if(oldpro!=null){
            newproquant=(Number)(oldpro.quantity)-needquantityvaluenumber;
            let index=this.mycard.indexOf(oldpro);
            if(newproquant>0){
              this.mycard[index].quantity=newproquant;
              Product.Quantity=+needquantityvaluenumber;
            }else{
              this.mycard.splice(index, 1);
              Product.Quantity+=needquantityvaluenumber;
            }
        }
    }
    console.log("mmmmmmm"+(this.mycard).length);
    //this.changedproductidquantity=0
      this.whenchangemycard.emit(this.mycard);
      this.usercartservice.fillusercartitems(this.mycard);
  }
  openProductDetails(productId: number,prounductcount:number){
    this.router.navigate(['/products',productId,prounductcount]);
  }
}
