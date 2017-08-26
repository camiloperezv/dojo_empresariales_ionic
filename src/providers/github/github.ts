import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ErrorHandlerProvider } from '../error-handler/error-handler'
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the GithubProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubProvider {
  private url = 'https://api.github.com/users'
  constructor(public http: Http, private errorHand:ErrorHandlerProvider) {
    console.log('Hello GithubProvider Provider');
  }
  public getUser(id):Promise<any>{
     return this.http.get(`${this.url}/${id}`)
         .toPromise()
         .then(response=>response.json())
         .catch(this.errorHand.error);
  }
  public getRepo(id):Promise<any>{
    return this.http.get(`${this.url}/${id}/repos`)
        .toPromise()
        .then(response=>response.json())
        .catch(this.errorHand.error);
  }

}
