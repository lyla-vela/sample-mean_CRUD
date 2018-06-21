import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HomeComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
