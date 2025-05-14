import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../service/static-products.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule,FormsModule],
   standalone: true,
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {

 product: { name: string, id: number, price: number, qty: number } = {
    name: '',
    id: 0,
    price: 0,
    qty: 0
  };
  constructor(private productService:StaticProductsService, 
      private router: Router,
      private route: ActivatedRoute) {
 productService.getAllproducts();


  }

  ngOnInit(): void {
        const id = +this.route.snapshot.params['id'];
        if(id!=0){
const existingProduct = this.productService.getProductById(id);
          if (existingProduct) {
            this.product = { ...existingProduct };
          }
        }



  }
saveProduct(){
if (this.product.id === 0){
   this.product.id = this.productService.getAllproducts().length + 1;
  this.productService.addNewProduct(this.product);
    console.log(this.product);

}
else{
 this.productService.updateProduct(this.product);
  console.log(this.product);
}
  
     this.router.navigate(['/products']);
}


}
