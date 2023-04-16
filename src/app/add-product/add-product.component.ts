import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ApiService } from './../api.service';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit  {
  mobileProduct! :FormGroup;
  dialogBox = false;
  modelstyle = 'display:none';
  productData:any;

  constructor( private api:ApiService,private fb:FormBuilder, private route:ActivatedRoute) {}
  ngOnInit() {
   this.route.queryParams.subscribe((params) =>{
    console.log(params);
    if(params['productId']){
      this.api.getProductById(params['roductId']).subscribe(productdata =>{
        this.productData = productdata;
        debugger;
        this.mobileProduct.patchValue(this.productData)
      })
    }
   });

    this.mobileProduct = this.fb.group({
      mobilebrand: ['', Validators.required],
      model: ['', Validators.required],
      os: ['', Validators.required],
      dop: ['', Validators.required],
      dom: ['', Validators.required],
      rd: ['', Validators.required],
      ss: ['', Validators.required],
      ct: ['', Validators.required],
      as: ['', Validators.required],
      ram: ['', Validators.required],
      rom: ['', Validators.required],
      bc: ['', Validators.required],
      color: ['', Validators.required],
      weight: ['', Validators.required],
      coo: ['', Validators.required],
    })
  }
  
  onsubmit(){ 
    if(this.mobileProduct.valid){
      console.log(this.mobileProduct);
        this.api.mobilesList(this.mobileProduct.value)
        .subscribe({
          next: (res)=>{
            console.log(res);
            this.dialogBox = true;
            this.modelstyle = "display:inline-block;background: rgb(150 153 150 / 50%);";
            this.mobileProduct.reset();
            },
            error: (err)=>{
              console.log(err);
            }
      }) 
    }
    else {
      this.validateAllFormFields(this.mobileProduct);
    }

  }

  updateProductdata(id:number){
    this.api.updateProductData(id,this.mobileProduct.value).subscribe({
      next:() =>{
        alert("Product Data updated successfully");
      }, error:() =>{
        alert("Error updating product");
      }
    });
  }

  validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach((field) => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control); 
        }
      })
    }

    successMsg(){
     this.dialogBox = false;
    }
}
