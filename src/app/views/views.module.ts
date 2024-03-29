import { ComponentsModule } from './../components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AreaTeacherComponent } from './area-teacher/area-teacher.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { AnnotationsStudentComponent } from './annotations/annotations-student/annotations-student.component';
import { AnnotationDetailsComponent } from './annotations/annotation-details/annotation-details.component';
@NgModule({
  declarations: [
    HomepageComponent,
    PageNotFoundComponent,
    AreaTeacherComponent,
    StudentDetailsComponent,
    AnnotationsStudentComponent,
    AnnotationDetailsComponent,
  ],
  imports: [CommonModule, MatIconModule, ComponentsModule],
})
export class ViewsModule {}
