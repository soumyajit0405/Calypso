import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {ActionService} from "../../providers/action-service";
import {StoreService} from "../../providers/store-service";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the AddcalypsoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcalypso',
  templateUrl: 'addcalypso.html',
})
export class AddcalypsoPage {
	
	resposeData : any;
  calypsoData = {"id":"","name":""};


  constructor(public navCtrl: NavController, public navParams: NavParams,public actionservice : ActionService,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcalypsoPage');
  }

  add()
  {
	  
	      let inputData={};
	  inputData["phone"]=localStorage.getItem("phone");
	  inputData["calypsoId"]=this.calypsoData.id;
	  inputData["calypsoName"]=this.calypsoData.name;
	  
	//  console.log(inputData["email"]);
	  if(inputData["calypsoId"]){
     this.actionservice.addCalypso(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	if(this.resposeData.response==-999)
	{
	//localStorage.setItem("email",this.resposeData.email);	
	 console.log("Already Added");
	   let alert = this.alertCtrl.create({
   // title: 'Low battery',
    subTitle: 'Already Added',
   // buttons: ['Dismiss']
  });
  alert.present();

	   // this.navCtrl.push(TabsPage);
	}
	else if(this.resposeData.response==0)
	{
	//localStorage.setItem("email",this.resposeData.email);	
	 console.log("Wrong Calypso");
	 	   let alert = this.alertCtrl.create({
   // title: 'Low battery',
    subTitle: 'Wrong Calypso Id',
   // buttons: ['Dismiss']
  });
  alert.present();

	   // this.navCtrl.push(TabsPage);
	}
	
	else if(this.resposeData.response==1)
	{
	//localStorage.setItem("email",this.resposeData.email);	
	 console.log("Successfully added");
	 let alert = this.alertCtrl.create({
   // title: 'Low battery',
    subTitle: 'Successfully added',
   // buttons: ['Dismiss']
  });
  alert.present();

	    this.navCtrl.push(TabsPage);
	}
	
	});
	
   
  }
  }
}
