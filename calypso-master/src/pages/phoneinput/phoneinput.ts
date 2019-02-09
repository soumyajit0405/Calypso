import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PasswordPage} from "../password/password";
import {RegisterPage} from "../register/register";
import {AuthServiceCustom} from "../../providers/auth-service";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the PhoneinputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phoneinput',
  templateUrl: 'phoneinput.html',
})
export class PhoneinputPage {
	resposeData : any;
  userData = {"phone":""};

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService : AuthServiceCustom) {
	  if(localStorage.getItem("phone")!="NA")
	  {
		 
		    this.navCtrl.push(TabsPage);
	  }
  }

  // go to register page
  continue() {
	    let inputData={};
	  inputData["phone"]=this.userData.phone;
	//  console.log(inputData["email"]);
	  if(inputData["phone"]){
     this.authService.checkExistence(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	if(this.resposeData.key==1)
	{
	localStorage.setItem("phone",inputData["phone"]);	
	 this.navCtrl.setRoot(RegisterPage);
	}
	else if(this.resposeData.key==-999){
		  localStorage.setItem("phone",inputData["phone"]);	
	 this.navCtrl.push(PasswordPage);	
	}
	else{
		
	}});
	
   
  }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneinputPage');
  }

}
