import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blog: Entry<any>[] = []
  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
    this.index()
  }
  index() {
    this.blogService.getAll().subscribe({
      next: (res: any) => {
        this.blog = res.items
        console.log(this.blog);
      }, error: (err: any) => {
        console.log(err);
      }, complete: () => {
        console.log('http request complete');
      }
    })
  }
}
