import { TypeJobListingFields } from './../content-types';
import { environment } from './../../../../environments/environment';
import { createClient } from 'contentful';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })
  constructor() { }
  getJobListing(query?: object) {
    return from(
      this.client.getEntries<TypeJobListingFields>(Object.assign({
        content_type: 'jobListing'
      },query))
    )
  }
}
