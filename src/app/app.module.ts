import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Ajoutez HttpClientModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }