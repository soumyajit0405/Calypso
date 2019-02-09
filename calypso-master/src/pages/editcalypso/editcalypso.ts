import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ActionService} from "../../providers/action-service";
import {TabsPage} from "../tabs/tabs";
import {StoreService} from "../../providers/store-service";

/**
 * Generated class for the EditcalypsoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editcalypso',
  templateUrl: 'editcalypso.html',
})
export class EditcalypsoPage {
calypsoData = {"id":"","name":""};
resposeData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public store: StoreService,public actionservice : ActionService) {
	   this.calypsoData.id=this.store.calypsoData.id;
	  this.calypsoData.name=this.store.calypsoData.name;
	
	 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditcalypsoPage');
  }
edit()
{
	      let inputData={};
	  inputData["phone"]=localStorage.getItem("phone");
	  inputData["calypsoId"]=this.calypsoData.id;
	  inputData["calypsoName"]=this.calypsoData.name;
	  
	//  console.log(inputData["email"]);
	  if(inputData["calypsoId"]){
     this.actionservice.editCalypso(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	
	 if(this.resposeData.response==1)
	{
	//localStorage.setItem("email",this.resposeData.email);	
	 console.log("Successfully added");
	    this.navCtrl.push(TabsPage);
	}
	
	});
	
   
  }
}
}
