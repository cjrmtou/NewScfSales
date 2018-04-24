import { Component, OnInit } from '@angular/core';
import { Customer, CustomerShipTo } from '../Customer';
import { Subject } from 'rxjs/Subject';
//import { CustomerDataService } from '../services/customer-data.service';
import * as authSvcs from '../services/authentication.service';
import * as custSvcs from '../services/customer-data.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private rawCustomerData: any;
  private customerData: Array<Customer>;

  private shipToRawData: Array<CustomerShipTo>;
  //= [
  //  { Id: 1, OrgId: '1425', CustomerName: 'Costco', AccountNumber: '01020393', ShipTo: ['001', '002', '003'] },
  //  { Id: 2, OrgId: '1425', CustomerName: 'Costco', AccountNumber: '01020395', ShipTo: ['01B', '02B', '03B'] },
  //  { Id: 3, OrgId: '1425', CustomerName: 'Costco', AccountNumber: '01020394', ShipTo: ['01', '02', '03'] },
  //  { Id: 4, OrgId: '1425', CustomerName: 'Costco', AccountNumber: '01020397', ShipTo: ['1A', '2B', '3C'] }
  //]  

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private custSvc: custSvcs.CustomerDataService) { }  

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      //order: [[4, "asc"]],
      columnDefs: [
        { orderable: false, targets: [0, 1, 2, 3] }
      ]
    };

    this.getCustomers();

  }

  edit(row) {    
    alert(row.SelectedAccountNumber);
    alert(row.SelectedShipTo);
  }

  onSelect(accountNumber, row) {  
    row.SelectedAccountNumber = accountNumber;
    row.SelectedShipTo = "";
    this.getShipTo(accountNumber, row.OrgId, row);    
  }

  onSelectShipTo(shipTo, row) {    
    row.SelectedShipTo = shipTo;       
  }

  getCustomers(): any {    
    this.custSvc.getCustomers()
      .subscribe(
      r => {
        this.rawCustomerData = JSON.parse(r);
        this.customerData = this.rawCustomerData.ListCustomers;        
        console.log(this.customerData);
      },
      e => { console.log(e) }
    );    
  }

  getShipTo(acctNum: string, orgId: string, row): any {
    this.custSvc.getShipTo(acctNum, orgId)
      .subscribe(
      r => {
        this.shipToRawData = JSON.parse(r).ListShipTo;
        row.ShipTo = this.shipToRawData;
        console.log(this.shipToRawData);
      },
      e => { console.log(e) }
      );
  }
  
}
