import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import { LoadingComponent } from './loading/loading.component';

const components = [ButtonComponent, LoadingComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatIconModule],
  exports: [...components],
})
export class ComponentsModule {}
