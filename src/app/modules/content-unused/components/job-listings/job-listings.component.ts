import { Component } from '@angular/core';
import { Entry } from 'contentful';
import { TypeJobListingFields } from '../../content-types';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.scss']
})
export class JobListingsComponent {
  jobListings: Entry<TypeJobListingFields>[] | undefined
  constructor(public contentService: ContentService) { }
  ngOnInit(): void {
    this.getJobListings()
  }
  getJobListings() {
    this.contentService.getJobListings().subscribe({
      next: (entryCollection) => {
        this.jobListings = entryCollection.items
        console.log(this.jobListings);
      }
    })
  }
}
