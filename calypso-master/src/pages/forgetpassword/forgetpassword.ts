import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PasswordPage} from "../password/password";
import {AuthServiceCustom} from "../../providers/auth-service";

/**
 * Generated class for the ForgetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgetpassword',
  templateUrl: 'forgetpassword.html',
})
export class ForgetpasswordPage {
	resposeData : any;
userData = {"email":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService : AuthServiceCustom) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpasswordPage');
  }
  
  send()
  {
	       let inputData={};
	//  inputData["email"]=localStorage.getItem("phone");
	  inputData["email"]=this.userData.email;
	//  console.log(inputData["email"]);
	  if(inputData["email"]){
     this.authService.sendPasswordToMail(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	if(this.resposeData.homeId.homeId==200)
	{
	//localStorage.setItem("email",this.resposeData.email);	
	 
	    this.navCtrl.push(PasswordPage);
	}
	else if(this.resposeData.homeId.homeId==-777){
		  
	 console.log("Wrong Credentials");
	 //this.navCtrl.push(PasswordPage);	
	}
	else{
		
	}});
	
   
  }
	 
  }

}
