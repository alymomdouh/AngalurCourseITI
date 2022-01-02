import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/icategory';

@Injectable({
  providedIn: 'root'
})
export class CateogryfromapiServicesService {

  constructor(private httpCateogryapiservice: HttpClient) { }
  getAllCategories(): Observable<ICategory[]> {
    return this.httpCateogryapiservice.get<ICategory[]>(`${environment.ApiDomainUrl}/Categories`);
  }
  getCategoryByID(catID: number): Observable<ICategory>{
      return this.httpCateogryapiservice.get<ICategory>(`${environment.ApiDomainUrl}/Categories/${catID}`);
  }
}
