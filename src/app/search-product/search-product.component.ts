import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit  {
  productsArray:any[] = [];
  singleProductArray:any[] = [];
  dialogWindow : boolean = false;
  errormsg : boolean =false;
  searchValue : string = "";
  p: number = 1;
  constructor(private api:ApiService,private route:Router){}
  ngOnInit(){
    this.getProducts();
  }
  getProducts(){
    this.api.getProductData()
    .subscribe(data =>{
      this.productsArray = data;
      console.log(data)

    })
    // console.log(this.productsArray)
  }
  deleteProduct(product:any){
    if(confirm("Are you sure you want to delete this product ?")){
      this.api.deleteProductData(product.id)
      .subscribe( (res) =>{
        // alert("Product deleted");
        this.getProducts();
      });
    }
   
  }

  productInfo(data:any){
    this.dialogWindow = true;
    this.singleProductArray = [];
    this.singleProductArray.push(data);
    console.log(this.singleProductArray);
  }

  filterData(){
    this.api.getProductData().subscribe((res) =>{
      // console.log(res);
      if(this.searchValue == ""){
        this.productsArray = res;
        this.errormsg = false;
      }
      else{
        this.productsArray = [];
        this.productsArray = res.filter((e:any ) => e.mobilebrand.toLowerCase().includes(this.searchValue.toLowerCase())
        || e.os.toLowerCase().includes(this.searchValue.toLowerCase()) || e.ram.toLowerCase().includes(this.searchValue.toLowerCase())
        || e.rom.toLowerCase().includes(this.searchValue.toLowerCase()) || e.ss.toLowerCase().includes(this.searchValue.toLowerCase())
        || e.ct.toLowerCase().includes(this.searchValue.toLowerCase()) || e.as.toLowerCase().includes(this.searchValue.toLowerCase())
        );
        console.log(this.productsArray);
        if(this.productsArray.length == 0){
          this.errormsg = true;
        }
        else{
          this.errormsg = false;
        }
      }
    })
  }
 key:string = 'mobilebrand';
 reverse:boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }


  /* ******updatemethod****** */
  updateProduct(data:any){
    this.route.navigate(['/addproduct'],{queryParams:{productId:data.id}, queryParamsHandling:'merge'})
  }


}
