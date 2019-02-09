import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {AuthServiceCustom} from "../../providers/auth-service";

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
resposeData : any;
  userData = {"newpassword":"", "confirmpassword":""};

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService : AuthServiceCustom,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }
save()
  {
	  if(this.userData.newpassword == this.userData.confirmpassword)
	  {
	     let inputData={};
	  inputData["phone"]=localStorage.getItem("phone");
	  inputData["password"]=this.userData.newpassword;
	//  console.log(inputData["email"]);
	  if(inputData["password"]){
     this.authService.changePassword(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	if(this.resposeData.response==1)
	{
	//localStorage.setItem("email",this.resposeData.email);	
	 
	    this.navCtrl.push(TabsPage);
	}
	else if(this.resposeData.response==-999){
		  
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
  }
}
