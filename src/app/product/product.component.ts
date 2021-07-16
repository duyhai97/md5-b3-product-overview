import { Component, OnInit } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 = new Product(1,"iphone 6",5000000)
  product2 = new Product(2,"iphone 7",6000000)
  product3 = new Product(3,"iphone 8",7000000)
  product4 = new Product(4,"iphone X",8000000)

  productList = [this.product1, this.product2, this.product3, this.product4]

  constructor() { }

  ngOnInit(): void {
  }

}
