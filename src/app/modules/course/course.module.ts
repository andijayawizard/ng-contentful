import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { AppPipeModule } from 'src/app/shared/modules/app-pipe/app-pipe.module';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailsComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule, AppPipeModule
  ]
})
export class CourseModule { }
