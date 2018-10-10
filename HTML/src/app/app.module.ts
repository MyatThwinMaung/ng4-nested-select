import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NestedSelectComponent } from './nested-select/nested-select.component';

import {
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NestedSelectComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
  ],
  entryComponents: [
    NestedSelectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
