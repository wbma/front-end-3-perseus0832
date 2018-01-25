import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { DigitransitService } from '../services/digitransit.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  printThis: string;
  mediaArray: any;
  stopArray: any;
  stopName: any;

  constructor(private mediaService: MediaService, private digitransitServices: DigitransitService) { }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data =>{
      console.log(data);
      this.mediaArray = data;

      this.mediaArray.map(media => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tn320.png';
        media.thumbnail = thumbName;        
      });

      console.log(this.mediaArray);

      console.log(this.digitransitServices.getRoutes(' ').subscribe(Response => {
      console.log(Response['data'].stops);
      this.stopArray = Response['data'].stops;
      }));
    });
  }

  public onClk(stopName){
    console.log(stopName);
    console.log(this.digitransitServices.getRoutes(stopName).subscribe(Response => {
    console.log(Response['data'].stops);
    this.stopArray = Response['data'].stops;
    }));
  }

}
