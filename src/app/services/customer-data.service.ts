import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class CustomerDataService {

  constructor(private http: HttpClient) { }

  getCustomers(): any {
    console.log('Calling getCustomers');

    let serviceUrl: string = `${environment.serviceBaseUrl}api/getCustomers`;
    return this.http.get(serviceUrl, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });

  }

  getShipTo(acctNum: string, orgId: string): any {
    console.log('Calling getShipTo');

    let serviceUrl: string = `${environment.serviceBaseUrl}api/getShipToLocations?accountNumber=${acctNum}&OrgId=${orgId}`;
    return this.http.get(serviceUrl, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });

  }


  _errorHandler(error: Response) {
    debugger;
    console.log(error);
    return Observable.throw(error || "Internal server error");
  }
}
