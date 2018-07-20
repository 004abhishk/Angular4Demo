import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroListComponent } from './avengers/hero-list.component';
import { HeroFilterPipe } from './avengers/hero-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
