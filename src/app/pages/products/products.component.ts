import { StaticProductsService } from './../../service/static-products.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products!:{name:string,id:number,price:number,qty:number}[];
  product!:any;
  constructor(private productService:StaticProductsService)
  {

  }
  /**
   * OnInit lifecycle hook. Populates the component's products property by
   * calling the getAllProducts() method of the injected StaticProductsService.
   */
  ngOnInit(): void {
  this.products = this.productService.getAllproducts();
  }
  searchTerm: string = '';
  deleteProduct(productid: number) {
    this.productService.deleteProduct(productid);
    this.products = this.productService.getAllproducts();
  }



}
