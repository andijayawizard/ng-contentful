import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'contentful';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  course!: Entry<any>
  constructor(private courseService: CourseService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.courseService.getCourse(id).then((res) => {
      this.course = res
      console.log(this.course);
    })
  }
  goToList() {
    this.router.navigate(['/courses'])
  }
}
