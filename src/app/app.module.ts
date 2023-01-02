import { MenuTabsComponent } from './components/menu-tabs/menu-tabs.component';
import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const modules = [ComponentsModule, ViewsModule];
const material = [MatIconModule];
const commons = [
  RouterModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
];
@NgModule({
  declarations: [AppComponent, MenuTabsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules,
    ...material,
    ...commons,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [...modules, material],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
