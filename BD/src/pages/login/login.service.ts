import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../../app/config.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService{
    private ip:string;
    constructor(private http:Http,private configservice:ConfigService){
        this.ip = this.configservice.getIp();
    }

    login(userObj):Observable<any>{
       return this.http.post(this.ip+'/users/login',userObj)
       .map((res:Response)=>res.json())
       .catch((err:Response)=>Observable.throw(err.json()))
    }
}