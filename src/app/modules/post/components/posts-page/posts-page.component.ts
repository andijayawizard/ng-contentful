import { ContentfulService } from './../../../../contentful.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent {
  posts$ = this.contentfulService.getPosts()
  constructor(private contentfulService: ContentfulService) { }
}
