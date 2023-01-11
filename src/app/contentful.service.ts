import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'g18ofyk6marz',
  accessToken: 'kCHCtNmvPZIAzXRRvi4Ek04QhGYPbTw_8iqNkPoQKUw',
  contentTypeIds: {
    product: '',
    blog:'blog'
  }
}
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  })
  constructor() { }
  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.product
    }, query)).then(res => res.items)
  }
}
