import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListingDetailsComponent } from './components/job-listing-details/job-listing-details.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';

const routes: Routes = [
  { path: 'job-listing', component: JobListingComponent },
  { path: 'job-listing/:id', component: JobListingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobListingRoutingModule { }
