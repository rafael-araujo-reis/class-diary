import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomepageComponent,
    PageNotFoundComponent
  ],
  imports: [CommonModule],
})
export class ViewsModule {}
