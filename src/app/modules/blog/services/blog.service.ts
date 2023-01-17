import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private cdaClient = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })

  constructor() { }
  getAll(query?: object): any {
    return from(this.cdaClient.getEntries(Object.assign({
      content_type: environment.contentful.contentTypeIds.blog
    }, query))
      // .then((res) => { res.items })
    )
  }
  getDetails(id: string): any {
    return from(this.cdaClient.getEntry(id))
  }
}
