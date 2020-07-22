import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetMethodCallComponent } from './get-method-call/get-method-call.component';
import { PostMethodCallComponent } from './post-method-call/post-method-call.component';
import { PutMethodCallComponent } from './put-method-call/put-method-call.component';
import { DeleteMethodCallComponent } from './delete-method-call/delete-method-call.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    GetMethodCallComponent,
    PostMethodCallComponent,
    PutMethodCallComponent,
    DeleteMethodCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
