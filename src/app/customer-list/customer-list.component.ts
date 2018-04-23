import { Component, OnInit } from '@angular/core';
import { Customer, CustomerShipTo } from '../Customer';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private data: Array<Customer> = [
    { Id: 1, OrgId: '1425', Name: 'Costco', AccountNumber: ['01020393', '01020395', '01020394', '01020397'], ShipTo: [], SelectedAccountNumber:'', SelectedShipTo:''},
    { Id: 2, OrgId: '1426', Name: 'Costco Whole', AccountNumber: ['01020700', '01020701', '01020702', '01020703', '01020704'], ShipTo: [], SelectedAccountNumber:'', SelectedShipTo:''},
    { Id: 3, OrgId: '1427', Name: 'Costco Inc', AccountNumber: ['00001101', '00001102', '00001103', '00001104'], ShipTo: [], SelectedAccountNumber:'', SelectedShipTo:'' },
    { Id: 4, OrgId: '1428', Name: 'Costco Wholefood', AccountNumber: ['01020400', '01020401', '01020402', '01020403'], ShipTo: [], SelectedAccountNumber:'', SelectedShipTo:'' }
  ]

  private shipToRawData: Array<CustomerShipTo> = [
    { Id: 1, OrgId: '1425', CustomerName: 'Costco', AccountNumber: '01020393', ShipTo: ['001', '002', '003'] },
    { Id: 2, OrgId: '1425', CustomerName: 'Costco', AccountNumber: '01020395', ShipTo: ['01B', '02B', '03B'] },
    { Id: 3, OrgId: '1425', CustomerName: 'Costco', AccountNumber: '01020394', ShipTo: ['01', '02', '03'] },
    { Id: 4, OrgId: '1425', CustomerName: 'Costco', AccountNumber: '01020397', ShipTo: ['1A', '2B', '3C'] }
  ]

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      //order: [[4, "asc"]],
      columnDefs: [
        { orderable: false, targets: [0, 1, 2, 3] }
      ]
    };
  }

  edit(row) {    
    alert(row.SelectedAccountNumber);
    alert(row.SelectedShipTo);
  }

  onSelect(accountNumber, row) {
    if (this.shipToRawData.filter(s => s.AccountNumber === accountNumber)[0] != null) {
      row.ShipTo = this.shipToRawData.filter(s => s.AccountNumber === accountNumber)[0].ShipTo;    
    }    
    row.SelectedAccountNumber = accountNumber;
  }

  onSelectShipTo(shipTo, row) {    
    row.SelectedShipTo = shipTo;
  }
}
