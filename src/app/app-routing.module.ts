import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchProductComponent } from './search-product/search-product.component';

const routes: Routes = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:"home", component:HomeDetailsComponent},
  {path:'addproduct', component:AddProductComponent},
  {path:'searchproduct',component:SearchProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
