import { ContentfulService } from './../contentful.service';
import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private products: Entry<any>[] = []
  constructor(private contentfulService: ContentfulService) { }
  ngOnInit() {
    this.contentfulService.getProducts().then(products => this.products = products)
  }
}
