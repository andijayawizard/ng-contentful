import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseListComponent } from './components/course-list/course-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full', title: 'Course List' },
  { path: 'courses', component: CourseListComponent, title: 'Course List' },
  { path: 'course/:id', component: CourseDetailsComponent, title: 'Course Details' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
