import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<string> {
    console.log('Calling getUser');
    let serviceUrl: string = `${environment.serviceBaseUrl}api/getUsername`;
    return this.http.get(serviceUrl, { responseType: 'text' })
      .map((rslt: string) => {
        return rslt;
      });
  }

  //getCustomers(): any {
  //  console.log('Calling getMyCustomer');

  //  let serviceUrl: string = `${environment.serviceBaseUrl}api/getCustomers`;
  //  return this.http.get(serviceUrl, { responseType: 'text' })
  //    .map((rslt: string) => {
  //      return rslt;
  //    });

  //}

  _errorHandler(error: Response) {
    debugger;
    console.log(error);
    return Observable.throw(error || "Internal server error");
  }
}
