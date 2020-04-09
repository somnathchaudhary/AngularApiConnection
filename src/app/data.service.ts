import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {user} from  './user.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl='https://localhost:44329/api/Emps';
  constructor (private _http: HttpClient) {}
    getUsers(){
   return this._http.get<user[]>(this.apiUrl);
    }
}
