import { Component, OnInit } from '@angular/core';
import { ProductfromapiService } from 'src/app/Services/productfromapi.service';
import { CateogryServicesService } from 'src/app/Services/cateogry-services.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ICategory } from 'src/app/ViewModels/icategory';
import { ActivatedRoute, Router } from '@angular/router';
import { CateogryfromapiServicesService } from 'src/app/Services/cateogryfromapi-services.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {
newproduct:IProduct={} as IProduct;   //{ID:0,Name:"", Img:"",Price:0,Quantity:0,rate:0,CateogryID:1 };
ICategorylist!:ICategory[];
 selectedimg:File=null as unknown as File ;
  constructor(private ProductfromapiServicee:ProductfromapiService,
              private CateogryServicesService:CateogryServicesService,
              private Cateogryfromapiservice:CateogryfromapiServicesService,
              private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    //this.ICategorylist=this.CateogryServicesService.getAllCategories();
    this.Cateogryfromapiservice.getAllCategories().subscribe({
      next:(data)=>this.ICategorylist=data,
    });
  }

  CreateNewProduct(){
    //this.newproduct= {ID:100,Name:"new Product",Price:100,Quantity:10, rate:0,CateogryID:1, Img:"new img path.png"  }
    this.ProductfromapiServicee.createProduct(this.newproduct).subscribe({
      next:(res)=>{
        //console.log("is add successfully"+res);
        alert(" the new product is added successfully");
        this.newproduct={} as IProduct;
        this.router.navigate(['/product/allproducts']);
        },
      error:(err)=>{console.log(err)}
    });
    //console.log(this.newproduct)
  }
  onfileselected(event:any){
    if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.selectedimg = event.target.result;
                //console.log(this.selectedimg);// image in byte
            }
            reader.readAsDataURL(event.target.files[0]);
            console.log(event.target.files[0]);

        }
      //this.selectedimg=event.target.files[0].name;
      //console.log(this.selectedimg);

  }
  uploadtheimg(){
    const fd=new FormData();
     let httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'multipart/form-data',
            //Authorization: 'my-auth-token'
          })
    }
    fd.append('image',this.selectedimg,this.selectedimg.name);
    this.http.post("http://127.0.0.1:8887/imgs/?static=1",fd,httpOptions).subscribe({
      next:(res)=>{console.log(res);}
    });
  }
}
