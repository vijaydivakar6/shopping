import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { Component, OnInit ,Input} from '@angular/core';
import {Product}from 'src/app/models/product';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
 
  @Input() productItem:Product
  @Input() addedToWishlist:boolean;
  constructor(private msg:MessengerService ,private cartService:CartService ,private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })
   
  }
  handleAddToWishList(){
  this.wishlistService.addToWsihList(this.productItem.id).subscribe(()=>{
    this.addedToWishlist=true;
  })
  }
  handleRemoveFromWishlist(){
    this.wishlistService.removeFromWishList(this.productItem.id).subscribe(()=>{
      this.addedToWishlist=false;
    })

  }
}
