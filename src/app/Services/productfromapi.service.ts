import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductfromapiService {
  private httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            //Authorization: 'my-auth-token'
          })
    }
  constructor(private httpproductapiservice: HttpClient) {
    //this.httpproductapiservice.get.post.delete......

  }
  getAllProducts(): Observable<IProduct[]> {
    //return this.httpproductapiservice.get<IProduct[]>("http://localhost:8080/");
    return this.httpproductapiservice.get<IProduct[]>(`${environment.ApiDomainUrl}/products`);
  }
  getProductByID(productID: number): Observable<IProduct>{
      //return this.httpproductapiservice.get<IProduct>(`http://localhost:4200//getproduct/${productID}`);
      return this.httpproductapiservice.get<IProduct>(`${environment.ApiDomainUrl}/products/${productID}`);
  }
    getProductCatID(catID: number): Observable<IProduct[]> {
      return this.httpproductapiservice.get<IProduct[]>(`${environment.ApiDomainUrl}/products?CateogryID=${catID}`);
    }
    createProduct(product:IProduct):Observable<any> {
      // const httpOptions={
      //   headers:new HttpHeaders({
      //     'content-type': 'application/JSON'
      //     // ,'Authorization': 'AccessToken'
      //   })
      //}
      return this.httpproductapiservice
                  .post(`${environment.ApiDomainUrl}/products`,JSON.stringify(product), this.httpOptions);
    }

    editProduct(prdID:number, newPrd:IProduct)  {
      return this.httpproductapiservice.put(`${environment.ApiDomainUrl}/products`,JSON.stringify(newPrd), this.httpOptions)
    //.pipe( catchError(this.handleError('updateHero')) );
    }
  updateProduct(newPrd:IProduct):Observable<IProduct>  {
      return this.httpproductapiservice.put<IProduct>(`${environment.ApiDomainUrl}/products/${newPrd.id}`,JSON.stringify(newPrd), this.httpOptions)
    //.pipe( catchError(this.handleError('updateHero')) );
    }
    updateproductQuantity(prodid: number,quan:number):Observable<IProduct>{
      let fullquan:number=quan;
      this.getProductByID(prodid).subscribe({
        next:(prod)=>{ fullquan+= prod.Quantity}
      });
      return this.httpproductapiservice.patch<IProduct>(`${environment.ApiDomainUrl}/products/${prodid}`,JSON.stringify({"Quantity": fullquan}), this.httpOptions)
    }
    //   productQuantity(prodid: number):number{
    //   let prrodquan:number=0;
    //     this.getProductByID(prodid).subscribe({
    //     next:(prod)=>{ prrodquan= prod.Quantity},
    //     error:()=>{prrodquan= 0;}
    //   });
    //   console.log("old product quantity"+prrodquan)
    //   return prrodquan;
    // }
      deleteProduct(prdID:number):Observable<{}>
    {
        const url=`${environment.ApiDomainUrl}/products/${prdID}`;
        return this.httpproductapiservice.delete(`${environment.ApiDomainUrl}/products/${prdID}`,this.httpOptions)
        //.pipe( catchError(  this.handleError('deleteHero')) );
    }
  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}


