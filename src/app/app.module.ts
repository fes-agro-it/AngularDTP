import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import {MaterialModule} from './material.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DateTimePickerComponent
  ],
    imports: [
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
