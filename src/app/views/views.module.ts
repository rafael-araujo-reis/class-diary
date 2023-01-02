import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { AreaTeacherComponent } from './area-teacher/area-teacher.component';

@NgModule({
  declarations: [
    HomepageComponent,
    PageNotFoundComponent,
    AreaTeacherComponent,
  ],
  imports: [CommonModule, MatIconModule],
})
export class ViewsModule {}
