import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { TypeJobListingFields } from '../../content-types';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.scss']
})
export class JobListingComponent {
  jobListing: TypeJobListingFields | null = null
  constructor(public contentService: ContentService, public route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.contentService.getJobListingById(params.get('id') as string)
      )
    ).subscribe({
      next: (entry) => {
        this.jobListing = entry.fields
      }
    })
  }
}
