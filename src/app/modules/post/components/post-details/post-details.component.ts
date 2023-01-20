import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../../../../contentful.service';
import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  id = this.route.snapshot.paramMap.get('id')
  post$ = this.postService.getPost(this.id!)
  constructor(private postService: PostService, private route: ActivatedRoute) { }
}
