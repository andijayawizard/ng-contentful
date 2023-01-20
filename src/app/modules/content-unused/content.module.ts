import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { JobListingsComponent } from './components/job-listings/job-listings.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    JobListingsComponent,
    JobListingComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule, RouterModule
  ]
})
export class ContentModule { }
