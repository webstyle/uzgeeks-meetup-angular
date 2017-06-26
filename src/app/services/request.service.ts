import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Requests} from '../classes/requests';

@Injectable()
export class RequestService {

  constructor(private http: Http) {
  }

  public getRequests(): Promise<Requests[]> {
    return this.http.get('http://localhost:3001')
      .toPromise()
      .then(response => response.json() as Requests[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
