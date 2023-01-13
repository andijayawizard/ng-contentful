import { TypeJobListingFields } from './../content-types';
import { environment } from './../../../../environments/environment';
import { createClient } from 'contentful';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  // private CONFIG = {
  //   space: environment.contentful.spaceId,
  //   accessToken: environment.contentful.accessToken,
  //   contentTypeIds: {
  //     angularBlog: 'angularBlog'
  //   }
  // }
  private cdaClient = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })
  constructor() {
  }
  getJobListings(query?: object) {
    return from(
      this.cdaClient.getEntries<TypeJobListingFields>(Object.assign({
        content_type: 'jobListing'
      }, query))
    )
  }
  getJobListingById(jobListingId: string, query?: any) {
    return from(
      this.cdaClient.getEntry<TypeJobListingFields>(jobListingId, query)
    )
  }
}
