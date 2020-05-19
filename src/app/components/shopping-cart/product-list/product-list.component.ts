import { WishlistService } from 'src/app/services/wishlist.service';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  productList:Product[]=[]
  wishlist:number[]=[]
  constructor(private productService:ProductService ,private wishlistService:WishlistService) { }

  ngOnInit() {
  this.loadProducts()
  this.loadWishlist();
  }

  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{
      this.productList =products;
      
     })
  }

  loadWishlist(){
    this.wishlistService.getWishList().subscribe(productIds =>{
      this.wishlist=productIds
      console.log(productIds)
    })
  }

}
