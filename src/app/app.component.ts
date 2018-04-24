import { Component, OnInit } from '@angular/core';
import * as authSvcs from './services/authentication.service';
import * as models from './models/PostData';
import { Customer } from './Customer';


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
  //private customerData: Customer;

  constructor(
    private authSvc: authSvcs.AuthenticationService,
  ) {  }

  ngOnInit() {
    this.testAuthentication();    
    //this.getCustomers();
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
  }

  //getCustomers(): any {
  //  this.authSvc.getCustomers()
  //    .subscribe(
  //    r => this.customerData = r,
  //    e => { console.log(e) }
  //    );
  //}
}
