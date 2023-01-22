import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { TagContainerComponent } from './components/tag-container/tag-container.component';
import { ImageCardComponent } from './components/image-card/image-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageContainerComponent,
    TagContainerComponent,
    ImageCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
