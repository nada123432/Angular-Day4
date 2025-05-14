import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  products:any;
 
  constructor() {
    this.products =[
      { name: 'Product 1', id: 1, price: 100, qty: 10 },
      { name: 'Product 2', id: 2, price: 200, qty: 20 },
      { name: 'Product 3', id: 3, price: 300, qty: 30 },
      { name: 'Product 4', id: 4, price: 400, qty: 40 },
      { name: 'Product 5', id: 5, price: 500, qty: 50 }
    ];
   }
  getAllproducts(){
    return this.products
  }
  addNewProduct(product:any){

    this.products.push(product);
  }
  getProductById(id:number){
    return this.products.find((product:any) => product.id == id);
  }
  deleteProduct(id:number){
    this.products = this.products.filter((product:any) => product.id != id);
    return this.products;
  }
  updateProduct(updatedproduct:any){
    const index = this.products.findIndex((product:any) => product.id == updatedproduct.id);
 
      this.products[index] = updatedproduct;
    
  }
  
  
}
