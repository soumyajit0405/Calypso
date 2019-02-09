import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {AuthServiceCustom} from "../../providers/auth-service";
import {ForgetpasswordPage} from "../forgetpassword/forgetpassword";

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
resposeData : any;
  userData = {"password":""};
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService : AuthServiceCustom,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }
  enterPassword()
  {
	      let inputData={};
	  inputData["phone"]=localStorage.getItem("phone");
	  inputData["password"]=this.userData.password;
	//  console.log(inputData["email"]);
	  if(inputData["password"]){
     this.authService.login(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	if(this.resposeData.homeId.homeId==1)
	{
	//localStorage.setItem("email",this.resposeData.email);	
	 
	    this.navCtrl.push(TabsPage);
	}
	else if(this.resposeData.homeId.homeId==-999){
		  
		  let alert = this.alertCtrl.create({
   // title: 'Low battery',
    subTitle: 'Wrong Credentials',
   // buttons: ['Dismiss']
  });
  alert.present();	  
	
	 console.log("Wrong Credentials");
	 //this.navCtrl.push(PasswordPage);	
	}
	else{
		
	}});
	
   
  }
	 
  }
  forgetPassword()
  {
	  this.navCtrl.push(ForgetpasswordPage);
  }

}
