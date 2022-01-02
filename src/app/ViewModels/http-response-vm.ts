export interface HttpResponseVM {
  success:boolean;
    data:any;
    messages:string[];
    pageNo?: number;
    totalPages?:number;
    itemsPerPage?:number;
}
