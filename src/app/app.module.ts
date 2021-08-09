import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './shared/component/star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { CourseModule } from './courses/course.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot(
      [
        {
          path: '', redirectTo: 'courses', pathMatch: 'full'
        },
        {
          path: '**', component: Error404Component
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
