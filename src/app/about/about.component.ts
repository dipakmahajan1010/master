import { Component, OnInit } from '@angular/core';
import { AboutService, InsideService } from './about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myStatus : string = "Active";
  
  constructor(private aboutService: AboutService, private insideService : InsideService) {

   }

  ngOnInit() {
    this.getMyLogs();
  }


  getMyLogs(){
    this.aboutService.loggingStatus(this.myStatus);
    this.insideService.insideService(this.myStatus);
    
  }


}
