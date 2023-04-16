import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  mobilesList(data: any){
    return this.http.post("http://localhost:3000/productdata",data)
    .pipe( map((res:any)=>{
      return res ;
    } ))
  }
  getProductData(){
    return this.http.get("http://localhost:3000/productdata")
   .pipe( map((res:any)=>{
    return res ;
   }))
  }
  getProductById(id:number){
    return this.http.get("http://localhost:3000/productdata?id="+id)
   .pipe( map((res:any)=>{
    return res ;
   }))
  }
  // **************updateproduct*************
  updateProductData(id:number,data: any){
    return this.http.put<any>("http://localhost:3000/productdata/"+id,data)
    .pipe( map((res:any)=>{
      return res;
    }))
  }

// ***********table actions******************
  deleteProductData(id:number){
    return this.http.delete<any>("http://localhost:3000/productdata/"+id)
    .pipe(map((res:any)=>{
      return res ;
    }))
  }
}



