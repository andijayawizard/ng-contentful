import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JobListing } from '../interfaces/job-listing';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {
  cdaClient = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken
  })
  constructor() { }
  getJobListing(query?: object) {
    return from(
      this.cdaClient.getEntries<JobListing>(Object.assign({
        content_type: 'jobListing'
      }, query))
    )
  }
  getJobListingDetails(id: string, query?: any) {
    return from(
      this.cdaClient.getEntry<JobListing>(id, query)
    )
  }
}
