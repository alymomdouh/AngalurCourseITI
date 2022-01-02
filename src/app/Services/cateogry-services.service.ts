import { Injectable } from '@angular/core';
import { ICategory } from '../ViewModels/icategory';

@Injectable({
  providedIn: 'root'
})
export class CateogryServicesService {
private categories:ICategory[]
  constructor() {
      this.categories=[{id:1,Name:"mobiles"},{id:2,Name:"laptops"},{id:3,Name:"pcs"},{id:4,Name:"playstations"}];
  }
  getAllCategories():ICategory[]
  {
    return this.categories;
  }
  getCategoryById(catgid:number):ICategory{
    let category=this.categories.find(c => c.id==catgid);
    return (category)?category: {} as ICategory;
  }
}
