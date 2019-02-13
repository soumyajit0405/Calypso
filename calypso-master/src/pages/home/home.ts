import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {AddcalypsoPage} from "../addcalypso/addcalypso";
import {ActionService} from "../../providers/action-service";
import {EditcalypsoPage} from "../editcalypso/editcalypso";
import {StoreService} from "../../providers/store-service";
import {App} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
productInfo : any;
status : any;
resposeData : any;
  constructor(public navCtrl: NavController,public actionService : ActionService,private store: StoreService,private alertCtrl: AlertController,public app: App) {
let inputData={};
	 // inputData["userId"]="1";
	 if(localStorage.getItem("phone")!=null && localStorage.getItem("phone")!="NA")
	 {
	  inputData["phone"]=localStorage.getItem("phone");
	this.actionService.getDevices(inputData).then((result) =>{
		
    this.productInfo = result["response"];
	this.status = "ON";
	});
	 }
	 else{
		  localStorage.setItem("phone","NA");
	  this.app.getRootNav().setRoot(PhoneinputPage);

	 }

  }
add()
{
	this.navCtrl.push(AddcalypsoPage);
}
edit(device)
{
	this.store.calypsoData = device;
this.navCtrl.push(EditcalypsoPage);	
}
log(device)
{
	let inputData={};
	
if(this.status=="ON")
{
	//this.status="OFF";
	 inputData["status"]="1";
}	
else{
	//this.status="ON";
	inputData["status"]="0";
}
     inputData["phone"]=localStorage.getItem("phone");
	  inputData["calypsoId"]=device.id;
	//  inputData["calypsoName"]=device.name;
	  
	//  console.log(inputData["email"]);
	  if(inputData["calypsoId"]){
     this.actionService.log(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	
	 if(this.resposeData.response==1)
	{
	//localStorage.setItem("email",this.resposeData.email);	
	 console.log("Successfully added");
	   let alert = this.alertCtrl.create({
   // title: 'Low battery',
    subTitle: 'Done',
   // buttons: ['Dismiss']
  });
  alert.present();

	 //   this.navCtrl.push(TabsPage);
	}
	
	});
	
   
  }
}
}
