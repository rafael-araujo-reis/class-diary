import { ComponentsModule } from './../components/components.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AreaTeacherComponent } from './area-teacher/area-teacher.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { NotesStudentComponent } from './notes/notes-student/notes-student.component';
@NgModule({
  declarations: [
    HomepageComponent,
    PageNotFoundComponent,
    AreaTeacherComponent,
    StudentDetailsComponent,
    NotesStudentComponent,
  ],
  imports: [CommonModule, MatIconModule, ComponentsModule],
})
export class ViewsModule {}
