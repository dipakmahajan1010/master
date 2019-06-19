import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myStatus : string = "Not Active";
  // aboutService = new AboutService();

  constructor(private aboutService  : AboutService) { }

  ngOnInit() {

    this.getMyLogStatus();
  }


  getMyLogStatus(){
    this.aboutService.loggingStatus(this.myStatus);
  }

}
