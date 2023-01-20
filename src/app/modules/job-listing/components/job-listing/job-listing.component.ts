import { Component } from '@angular/core';
import { Entry } from 'contentful';
import { JobListing } from '../../interfaces/job-listing';
import { JobListingService } from '../../services/job-listing.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent {
  // jobListing: Entry<JobListing>[] | undefined
  // jobListing: Entry<JobListing>[] = []
  jobListing: Entry<any>[] = []

  constructor(private jobListingService: JobListingService) { }
  ngOnInit(): void {
    this.getJobListing()
  }
  getJobListing() {
    this.jobListingService.getJobListing().subscribe({
      next: (res: any) => {
        this.jobListing = res.items
        console.log(this.jobListing);
      }
    })
  }
}
