import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private cdaClient = createClient({
    // space: CONFIG.space,
    // accessToken: CONFIG.accessToken,
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })

  constructor() {
    this.getPosts()
  }
  getPosts(query?: object): any {
    return from(
      this.cdaClient.getEntries({
        ...Object,
        content_type: environment.contentful.contentTypeIds.angularBlog, query
      })
    ).pipe(map(posts => posts.items))
  }
  getPost(id: string): any {
    return from(this.cdaClient.getEntry(id))
  }
}
