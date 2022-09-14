import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { NewsserviceService } from "./services/newsservice.service";
import { TopHeadingsComponent } from './components/top-headings/top-headings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeadingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    NewsserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
