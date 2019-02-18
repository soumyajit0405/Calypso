import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


//let apiUrl = "http://localhost/PHP-Slim-Restful/api/";
let loginUrl = 'https://www.autoiinnovations.com/Test/rest/login/authenticateUserWH';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActionService {

  constructor(public http: Http) {
    console.log('Hello AccountService Provider');
  }

  addController(credentials){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post('https://www.autoiinnovations.com/Test/rest/controller/verifyController', {controllerId: credentials.controllerId,passKey: credentials.passKey,userName: credentials.userName,controllerName: credentials.controllerName,device1: credentials.device1,device2:credentials.device2}, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
 
 addCalypso(credentials){
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post('https://www.autoiinnovations.com/rest/calypsoAction/addCalypso', credentials, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
  
  editCalypso(calypsoData){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post('https://www.autoiinnovations.com/rest/calypsoAction/updateCalypso', calypsoData, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
  
  log(calypsoData){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post('https://www.autoiinnovations.com/rest/calypsoAction/calypsoLog',calypsoData, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
  
  deleteSchedule(controllerData){

    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post('https://www.autoiinnovations.com/Test/rest/controller/scheduleDevice',controllerData, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
  
 getDevices(credentials){
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post('https://www.autoiinnovations.com/rest/calypsoAction/getTotalWaterUsage', credentials, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
   
  
  getMetrics(credentials){
    return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post('https://www.autoiinnovations.com/rest/calypsoAction/getMetrics', credentials, {headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
        reject(err);
      });

    });

  }
  
}
