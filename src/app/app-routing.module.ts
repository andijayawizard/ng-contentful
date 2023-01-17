import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListingsComponent } from './modules/content/components/job-listings/job-listings.component';
import { PostsPageComponent } from './modules/post/components/posts-page/posts-page.component';
import { PostDetailsComponent } from './modules/post/components/post-details/post-details.component';
import { ProductListComponent } from './modules/product/components/product-list/product-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'job-listings', component: JobListingsComponent },
  { path: 'job-listing/:id', component: JobListingsComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'products', component: ProductListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
