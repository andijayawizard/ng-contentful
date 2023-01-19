import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent {
  blog: any | null = null
  constructor(private blogService: BlogService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getDetails()
  }
  getDetails() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.blogService.getDetails(params.get('id') as string)
      )
    ).subscribe({
      next: (res: any) => {
        this.blog = res.fields
      }
    })
  }
}
