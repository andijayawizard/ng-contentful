import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';

const routes: Routes = [
  { path: 'posts', component: PostsPageComponent, title: 'Post List' },
  { path: 'post/:id', component: PostDetailsComponent, title: 'Post Details' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
