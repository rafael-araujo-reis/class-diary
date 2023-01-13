import { AnnotationDetailsComponent } from './views/annotations/annotation-details/annotation-details.component';
import { AnnotationsStudentComponent } from './views/annotations/annotations-student/annotations-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterEnum } from './shared/constants/RouterEnum.enum';

import { AreaTeacherComponent } from './views/area-teacher/area-teacher.component';
import { PageNotFoundComponent } from './views/errors/page-not-found/page-not-found.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { StudentDetailsComponent } from './views/students/student-details/student-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: RouterEnum.HOME_DIARY,
    pathMatch: 'full',
  },
  {
    path: RouterEnum.HOME_DIARY,
    component: HomepageComponent,
  },
  {
    path: RouterEnum.AREA_TEACHERT,
    component: AreaTeacherComponent,
  },
  {
    path: RouterEnum.STUDENT_DETAILS,
    component: StudentDetailsComponent,
  },
  {
    path: RouterEnum.NOTES_STUDENT,
    component: AnnotationsStudentComponent,
  },
  {
    path: RouterEnum.NOTE_DETAILS,
    component: AnnotationDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
