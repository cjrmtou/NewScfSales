import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-delivery-window',
  templateUrl: './delivery-window.component.html',
  styleUrls: ['./delivery-window.component.css']
})
export class DeliveryWindowComponent implements OnInit {
  orgId: string;
  accountNumber: string;
  shipTo: string;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  Arr = Array;
  loopTimes: number = 7;

  startTime: Array<string> =
  ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  endTime: Array<string> =
  ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00',
    '01:00 Next Day', '02:00 Next Day', '03:00 Next Day', '04:00 Next Day', '05:00 Next Day', '06:00 Next Day',
    '07:00 Next Day', '08:00 Next Day', '09:00 Next Day', '10:00 Next Day', '11:00 Next Day', '12:00 Next Day'];

  hours: Array<string> =
  ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00',
    '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'];
  
  constructor(route: ActivatedRoute) {
    this.orgId = route.snapshot.params['OrgId'];
    this.accountNumber = route.snapshot.params['AcctNum'];
    this.shipTo = route.snapshot.params['ShipTo'];
  }

  ngOnInit() {
    this.dtOptions = {
      //pagingType: 'full_numbers',      
      columnDefs: [
        { orderable: false, targets: [0, 1, 2, 3, 4, 5, 6] }
      ]
    }
  }

}
