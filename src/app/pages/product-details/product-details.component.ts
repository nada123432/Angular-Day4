import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductsService } from '../../service/static-products.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product!:{name:string,id:number,price:number,qty:number};
  productId!:number;

  constructor(private activatedRoute:ActivatedRoute,private productService:StaticProductsService)
  {

console.log(this.activatedRoute.snapshot.params['id']);
this.productId = this.activatedRoute.snapshot.params['id'];
this.product=productService.getProductById(this.productId);
console.log(this.product);
  }

}
