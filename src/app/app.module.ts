import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulService } from './contentful.service';
import { ToHtmlPipe } from './to-html.pipe';
import { PostsPageComponent } from './modules/post/components/posts-page/posts-page.component';
import { PostDetailsComponent } from './modules/post/components/post-details/post-details.component';
import { ProductService } from './modules/product/services/product.service';
import { ProductModule } from './modules/product/product.module';
import { BlogModule } from './modules/blog/blog.module';
import { HousingListComponent } from './shared/components/housing-list/housing-list.component';
import { JobListingModule } from './modules/job-listing/job-listing.module';

@NgModule({
  declarations: [
    AppComponent,
    ToHtmlPipe,
    PostsPageComponent,
    PostDetailsComponent,
    HousingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule, ProductModule, BlogModule, JobListingModule
  ],
  providers: [ContentfulService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
