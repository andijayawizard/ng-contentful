import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  protected products: Entry<any>[] = []
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productService.getProducts().then(products => this.products = products)
  }
}
