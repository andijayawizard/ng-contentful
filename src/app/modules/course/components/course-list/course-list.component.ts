import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  courses: Entry<any>[] = []
  constructor(private courseService: CourseService, private router: Router) { }
  ngOnInit() {
    this.courseService.getCourses().then((courses) => { this.courses = courses })
  }
  goToCourseDetailsPage(id: any) {
    console.log(id);
    this.router.navigate(['/course', id])

  }
}
