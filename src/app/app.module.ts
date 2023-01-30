import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from '@angular/core';
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
import { ServiceWorkerModule } from '@angular/service-worker';

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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [...modules, ...material],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
