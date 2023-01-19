import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListingRoutingModule } from './job-listing-routing.module';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { JobListingDetailsComponent } from './components/job-listing-details/job-listing-details.component';


@NgModule({
  declarations: [
    JobListingComponent,
    JobListingDetailsComponent
  ],
  imports: [
    CommonModule,
    JobListingRoutingModule
  ]
})
export class JobListingModule { }
