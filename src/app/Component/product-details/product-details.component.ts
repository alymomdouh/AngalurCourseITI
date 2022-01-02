import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductmemorydataService } from 'src/app/Services/productmemorydata.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { Location } from '@angular/common';
import { ProductfromapiService } from 'src/app/Services/productfromapi.service';
import { Slider } from 'src/app/ViewModels/slider';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
productID: number=0;
productcount: number=0;
startslider:boolean=false;
endslider:boolean=false;
  product:IProduct={} as IProduct;
  constructor(private recevedRouter:ActivatedRoute,private productService:ProductmemorydataService,
      private Historylocation:Location, private router:Router,
      private ProductfromapiServicee:ProductfromapiService) { }

  ngOnInit(): void {
    this.recevedRouter.paramMap.subscribe((params)=>{
      this.productID=Number(params.get("pid"));
      this.productcount=Number(params.get("pcount"));
      //this.product=this.productService.getProductByID(this.productID);
      this.ProductfromapiServicee.getProductByID(this.productID).subscribe({
        next:(data)=>{this.product=data},
      });
    });
  }
goBackallproducts(){
    this.Historylocation.back();
}
prevProduct(){
  this.router.navigate(['/products', this.productID-1,this.productcount]);
}
nextProduct(){
    this.router.navigate(['/products', this.productID+1,this.productcount]);
}
prevProductincategory(){
  this.getnextorprevproduct(this.productID,Slider.previous);
}
nextProductincategory(){
  this.getnextorprevproduct(this.productID,Slider.Next);
}
  async getnextorprevproduct(currentproductID:number,Slidertype:Slider){
    let newproduct:IProduct={} as IProduct;
  if(Slider.Next==Slidertype){
      await this.ProductfromapiServicee.getProductByID(this.productID+1).subscribe({
        next:(prod)=>{newproduct=prod ;console.log("next"+prod.CateogryID)},
      });
  } if(Slider.previous==Slidertype){
    await this.ProductfromapiServicee.getProductByID(this.productID-1).subscribe({
        next:(prod)=>{newproduct=prod;console.log("prev"+prod.Name)},
      });
  }
if(this.product.CateogryID==newproduct.CateogryID){
  this.product=newproduct;
  this.productID=newproduct.id;
  console.log("===="+this.product.CateogryID+" "+newproduct.id)
}
if(this.product.CateogryID!=newproduct.CateogryID){
    if(Slider.Next==Slidertype){this.startslider=true;this.endslider=false;}
    else{this.endslider=true;this.startslider=false;}
    console.log("!!!!==="+this.product.CateogryID+" "+newproduct.id)
}
}
}
