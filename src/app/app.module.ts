import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListMediaComponent } from './list-media/list-media.component';
import { HttpClientModule } from '@angular/common/http';
import { MediaService } from './services/media.service';
import { DigitransitService } from './services/digitransit.service';
import { HttpHeaders } from '@angular/common/http';
import { NgModel } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListMediaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule      
  ],
  providers: [MediaService, DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
