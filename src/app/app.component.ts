import { Component, OnInit } from '@angular/core';
import * as authSvcs from './services/authentication.service';
import * as dataSvcs from './services/data.service';
import * as models from './models/PostData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  today: number = Date.now();

  private authRslt: string = '';
  private authBack: string = 'grey';
  private postRslt: string = '';
  private postBack: string = 'grey';

  private userName: string='';

  constructor(
    private authSvc: authSvcs.AuthenticationService,
    //private dataSvc: dataSvcs.DataService
  ) {  }

  ngOnInit() {
    this.testAuthentication();
  }

  testAuthentication(): void {
    this.authSvc.getUser()
      .subscribe(
      r => {
        this.authRslt = r;
        this.authBack = 'success';        
        this.userName = JSON.parse(r);
      },
      e => { console.log(e); this.authBack = 'error'; }
    );
    console.log(this.userName);
    //debugger;
  }

  //testPostData(): void {
  //  this.dataSvc.save(new models.PostDataModel({ Id: 1, Name: 'DeBiese', IsTrue: false, CreatedOn: new Date() }))
  //    .subscribe(
  //    r => { this.postRslt = r; this.postBack = 'success'; },
  //    e => { console.log(e); this.postBack = 'error'; }
  //    );
  //}
}
