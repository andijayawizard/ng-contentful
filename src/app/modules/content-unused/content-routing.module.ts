import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { JobListingsComponent } from './components/job-listings/job-listings.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'job-listings' },
  // { path: 'job-listings', component: JobListingsComponent },
  // { path: 'job-listing/:id', component: JobListingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
