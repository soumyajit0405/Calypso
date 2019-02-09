import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AccountService} from "../../providers/account-service";
import {ChangepasswordPage} from "../changepassword/changepassword";
import {PhoneinputPage} from "../phoneinput/phoneinput";
import {App} from 'ionic-angular';




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
resposeData : any;
  userData = {"name":"", "password":"","email":"","phone":"","instId":""};

  constructor(public navCtrl: NavController, public navParams: NavParams,public accountService : AccountService,public app: App,private alertCtrl: AlertController) {
	    let inputData={};
	  inputData["phone"]=localStorage.getItem("phone");
	   this.accountService.getProfileData(inputData).then((result) =>{
    this.resposeData = result;
    console.log(this.resposeData);
	if(this.resposeData)
	{
	this.userData.email=	this.resposeData.email;
	this.userData.phone=	this.resposeData.phone;
	this.userData.name=	this.resposeData.name;
	
	
	}
	else{
		let alert = this.alertCtrl.create({
   // title: 'Low battery',
    subTitle: 'No User',
   // buttons: ['Dismiss']
  });
  alert.present();

		console.log("No Profile");
	}
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  save()
  {
	      let inputData={};
	//  inputData["email"]=localStorage.getItem("phone");
	  inputData["email"]=this.userData.email;
	  inputData["name"]=this.userData.name;
	  inputData["phone"]=this.userData.phone;
	//  console.log(inputData["email"]);
	  if(inputData["email"]){
     this.accountService.saveProfileData(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	if(this.resposeData.response==1)
	{
	//localStorage.setItem("email",this.resposeData.email);	
	 console.log("Updated");
	 let alert = this.alertCtrl.create({
   // title: 'Low battery',
    subTitle: 'Updated',
   // buttons: ['Dismiss']
  });
  alert.present();

	   // this.navCtrl.push(PasswordPage);
	}
	else if(this.resposeData.response==-777){
	let alert = this.alertCtrl.create({
   // title: 'Low battery',
    subTitle: 'Wrong Details',
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
  changePassword()
  {
	     this.navCtrl.push(ChangepasswordPage); 
  }
  logout()
  {
	  localStorage.setItem("phone","NA");
	  this.app.getRootNav().setRoot(PhoneinputPage);



	      // this.navCtrl.rootNav.setRoot(PhoneinputPage); 
  }

}
