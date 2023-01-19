import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from, map } from 'rxjs';
import { environment } from 'src/environments/environment';

// const CONFIG = {
//   space: 'g18ofyk6marz',
//   accessToken: 'kCHCtNmvPZIAzXRRvi4Ek04QhGYPbTw_8iqNkPoQKUw',
//   contentTypeIds: {
//     product: '',
//     blog: 'blog'
//   }
// }
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  constructor() {
  }
  // getProducts(query?: object): Promise<Entry<any>[]> {
  //   return this.cdaClient.getEntries(Object.assign({
  //     content_type: environment.contentful.contentTypeIds.angularBlog
  //   }, query)).then(res => res.items)
  // }
}
