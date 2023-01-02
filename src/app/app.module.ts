import { ComponentsModule } from './components/components.module';
import { ViewsModule } from './views/views.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const modules = [ComponentsModule, ViewsModule];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ...modules],
  providers: [],
  bootstrap: [AppComponent],
  exports: [...modules],
})
export class AppModule {}
