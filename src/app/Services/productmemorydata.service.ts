import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductmemorydataService {
private ProductList:IProduct[];
  constructor() {
    this.ProductList=[
                  {id:1,Name:"mobile1",Quantity:10,Price :20,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
                  {id:2,Name:"mobile2",Quantity:2,Price :30,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
                  {id:3,Name:"mobile3",Quantity:10,Price :40,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
                  {id:4,Name:"mobile4",Quantity:20,Price :20,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
                  {id:5,Name:"mobile5",Quantity:5,Price :20,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
                  {id:6,Name:"mobile6",Quantity:0,Price :30,Img :"https://picsum.photos/id/1/100/100",CateogryID:1,rate:0},
                  {id:7,Name:"laptop1",Quantity:10,Price :20,Img :"https://picsum.photos/id/1/100/100",CateogryID:2,rate:0},
                  {id:8,Name:"laptop2",Quantity:5,Price :30,Img :"https://picsum.photos/id/1/100/100",CateogryID:2,rate:0},
                  {id:9,Name:"pc1",Quantity:10,Price :50,Img :"https://picsum.photos/id/1/100/100",CateogryID:3,rate:0},
                  {id:10,Name:"pc2",Quantity:10,Price :20,Img :"https://picsum.photos/id/1/100/100",CateogryID:3,rate:0},
                ];
    }
    getAllProducts(): IProduct[]
    {
      return this.ProductList;
    }
    getProductsByCatID(catID: number):IProduct[]
    {
      if(catID==0){
          return this.getAllProducts();
      }
      else
        return this.ProductList.filter(i=>i.CateogryID==catID);
    }
    getProductByID(prdID: number):IProduct //|undefined
    {
      //return this.ProductList.find(i=>i.ID==prdID);
      let foundPrd=this.ProductList.find(i=>i.id==prdID);
      return (foundPrd)?foundPrd: {} as IProduct;
    }
    addProduct(Product:IProduct){
      this.ProductList.push(Product);
    }
    updateProduct(){

    }
    removelastProduct(){
      this.ProductList.pop();
    }
}
