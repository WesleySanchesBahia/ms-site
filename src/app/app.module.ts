import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MapaComponent } from './components/mapa/mapa.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ShowSlideComponent } from './components/show-slide/show-slide.component';
import { FooterComponent } from './components/footer/footer.component';
import { TooltipoComponent } from './components/tooltipo/tooltipo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MapaComponent,
    ShowSlideComponent,
    FooterComponent,
    TooltipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
