import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PhoneinputPage} from "../phoneinput/phoneinput";
import {AuthServiceCustom} from "../../providers/auth-service";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
resposeData : any;
  userData = {"name":"", "password":"","email":"","phone":"","instId":""};

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService : AuthServiceCustom) {
	  this.userData.phone = localStorage.getItem("phone");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  login()
  {
	  this.navCtrl.push(PhoneinputPage);
  }

  register()
  {
	   let inputData={};
	   inputData["name"]=this.userData.name;
	  inputData["email"]=this.userData.email;
	  inputData["phone"]=this.userData.phone;
	  inputData["password"]=this.userData.password;
	//  console.log(inputData["email"]);
	  if(inputData["phone"]){
     this.authService.register(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	if(this.resposeData.key==1)
	{
	localStorage.setItem("phone",inputData["phone"]);	
	 this.navCtrl.push(TabsPage);
	}
	
	else{
		
	}});
	
   
  }  
  }
}

