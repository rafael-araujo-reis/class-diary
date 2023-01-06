import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import { LoaderComponent } from './loader/loader.component';

const components = [ButtonComponent, LoaderComponent];
@NgModule({
  declarations: [...components, ],
  imports: [CommonModule, MatIconModule],
  exports: [...components],
})
export class ComponentsModule {}
