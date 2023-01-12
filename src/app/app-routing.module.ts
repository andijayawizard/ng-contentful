import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListingsComponent } from './modules/content/components/job-listings/job-listings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'job-listings' },
  { path: 'job-listings', component: JobListingsComponent },
  { path: 'job-listing/:id', component: JobListingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
