import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleCasePipe } from './infraestrutura/pipes/title-case.pipe';
import { LoginService } from './services/login.service';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UiModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
