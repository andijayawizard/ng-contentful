import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from, map } from 'rxjs';
import { environment } from 'src/environments/environment';

const CONFIG = {
  space: 'g18ofyk6marz',
  accessToken: 'kCHCtNmvPZIAzXRRvi4Ek04QhGYPbTw_8iqNkPoQKUw',
  contentTypeIds: {
    product: '',
    blog: 'blog'
  }
}
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    // space: CONFIG.space,
    // accessToken: CONFIG.accessToken,
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })
  constructor() {
    this.getPosts()
  }
  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.product
    }, query)).then(res => res.items)
  }
  getPosts(query?: object): any {
    return from(
      this.cdaClient.getEntries({
        ...Object,
        content_type: environment.contentful.contentTypeIds.angularBlog, query
      })
    ).pipe(map(posts => posts.items))
  }
  // getPost(id: string): any {
  //   return from(this.cdaClient.getEntry(id))
  // }
}
