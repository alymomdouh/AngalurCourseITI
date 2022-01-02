import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CateogryfromapiServicesService } from 'src/app/Services/cateogryfromapi-services.service';
import { ProductfromapiService } from 'src/app/Services/productfromapi.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-editeproduct',
  templateUrl: './editeproduct.component.html',
  styleUrls: ['./editeproduct.component.scss']
})
export class EditeproductComponent implements OnInit {
  productID: number=0;
  ICategorylist!:ICategory[];
  product:IProduct={} as IProduct;
  constructor(private recevedRouter:ActivatedRoute, 
              private ProductfromapiServicee:ProductfromapiService,
              private Cateogryfromapiservice:CateogryfromapiServicesService,
              private router:Router) { }

  ngOnInit(): void {
    this.Cateogryfromapiservice.getAllCategories().subscribe({
      next:(data)=>this.ICategorylist=data,
    });
    this.recevedRouter.paramMap.subscribe((params)=>{
      this.productID=Number(params.get("pid")); 
      //this.product=this.productService.getProductByID(this.productID);
      this.ProductfromapiServicee.getProductByID(this.productID).subscribe({
        next:(data)=>{this.product=data;
                      //console.log(data)
                    },
      });
    });
    

  }
updateProduct(){
this.ProductfromapiServicee.updateProduct(this.product).subscribe({
  next:(res)=>{
      //console.log("is add successfully"+res);
      alert(" the product is update successfully"); 
      this.router.navigate(['/product/allproducts']);
      },
    error:(err)=>{console.log(err)}
});
}
}
