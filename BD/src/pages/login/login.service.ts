import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../app/config.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService{
    constructor(private http:Http){
    }

    login(userObj):Observable<any>{
       return this.http.post(Config.ip+'/users/login',userObj)
       .map((res:Response)=>res.json())
       .catch((err:Response)=>Observable.throw(err.json()))
    }
}