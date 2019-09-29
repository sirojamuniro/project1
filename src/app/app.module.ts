import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from './business.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { ShowPostComponent } from './show-post/show-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    GstAddComponent,
    GstGetComponent,
    ShowPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BusinessService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
