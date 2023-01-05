import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { MenuTabsComponent } from './components/menu-tabs/menu-tabs.component';
import { ViewsModule } from './views/views.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
  exports: [...modules, ...material],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
