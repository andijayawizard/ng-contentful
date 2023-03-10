import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsPageComponent } from './modules/post/components/posts-page/posts-page.component';
import { PostDetailsComponent } from './modules/post/components/post-details/post-details.component';
import { ProductModule } from './modules/product/product.module';
import { BlogModule } from './modules/blog/blog.module';
import { HousingListComponent } from './shared/components/housing-list/housing-list.component';
import { JobListingModule } from './modules/job-listing/job-listing.module';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { PostModule } from './modules/post/post.module';
import { CourseModule } from './modules/course/course.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent,
    PostDetailsComponent,
    HousingListComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule, ProductModule, BlogModule, JobListingModule, PostModule, CourseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
