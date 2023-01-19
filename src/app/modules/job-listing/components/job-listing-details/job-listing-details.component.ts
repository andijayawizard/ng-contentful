import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { JobListing } from '../../interfaces/job-listing';
import { JobListingService } from '../../services/job-listing.service';

@Component({
  selector: 'app-job-listing-details',
  templateUrl: './job-listing-details.component.html',
  styleUrls: ['./job-listing-details.component.scss']
})
export class JobListingDetailsComponent {
  jobListing: JobListing | null = null
  constructor(private jobListingService: JobListingService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getDetails()
  }
  getDetails() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.jobListingService.getJobListingDetails(params.get('id') as string)
      )
    ).subscribe({
      next: (res) => { this.jobListing = res.fields }
    })
  }
}
