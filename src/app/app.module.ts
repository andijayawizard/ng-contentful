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

@NgModule({
  declarations: [
    AppComponent,
    ToHtmlPipe,
    PostsPageComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule, ProductModule, BlogModule
  ],
  providers: [ContentfulService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
