import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { EnterComponent } from './enter/enter.component';
import { FullNamePipe } from './name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    FullNamePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
