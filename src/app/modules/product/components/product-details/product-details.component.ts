import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product: any | null = null
  constructor(private productService: ProductService, private route: ActivatedRoute) { }
  ngOnInit(): void { this.getDetails() }
  getDetails() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.productService.getDetails(params.get('id') as string)
      )
    ).subscribe({
      next: (res: any) => {
        this.product = res.fields
      }
    })
  }
}
