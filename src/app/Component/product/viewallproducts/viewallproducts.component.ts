import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ProductfromapiService } from 'src/app/Services/productfromapi.service';

@Component({
  selector: 'app-viewallproducts',
  templateUrl: './viewallproducts.component.html',
  styleUrls: ['./viewallproducts.component.scss']
})
export class ViewallproductsComponent implements OnInit {
ProductList:IProduct[]=[];
  constructor(private ProductsfromapiServicee:ProductfromapiService) { }

  ngOnInit(): void {
    this.ProductsfromapiServicee.getAllProducts().subscribe({
          next:(prodlist)=>{this.ProductList=prodlist;},
        });
  }
  getdata(){
    this.ProductsfromapiServicee.getAllProducts().subscribe({
      next:(data)=>{this.ProductList=data},
    });
  }
deleteproduct(productid:number){
    this.ProductsfromapiServicee.deleteProduct(productid).subscribe(
      {next:()=>{this.getdata();}}
    ); 
  }
}
