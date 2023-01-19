import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private cdaClient = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })
  constructor() { }
  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: environment.contentful.contentTypeIds.product
    }, query)).then(res => res.items)
  }
  getDetails(id: string): any {
    return this.cdaClient.getEntry(id)
  }
}
