import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ActionService} from "../../providers/action-service";

/**
 * Generated class for the MetricsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-metrics',
  templateUrl: 'metrics.html',
})
export class MetricsPage {
barChartLabels:string[] ;
 barChartType:string = 'bar';
 barChartLegend:boolean = true;

 barChartData:any  ;
 resposeData : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionservice : ActionService) {
	  //this.barChartData[0]={};
	        let inputData={};
	  inputData["calypsoId"]="1";
	  this.actionservice.getMetrics(inputData).then((result) =>{
    this.resposeData = result;
	console.log(this.resposeData);
	
	 if(this.resposeData.key)
	{
		let waterUsage=[];
		let timeFrame=[];
		let barData={};
		let barDataArray=[];
		    for(var j in this.resposeData){
				if(j!="key")
				{	
					timeFrame.push(j);
					waterUsage.push(this.resposeData[j]);
				}
				else{
					
				barData["label"]=this.resposeData[j];
				}
				}
				barData["data"]=waterUsage;
				barDataArray[0]=barData;
	this.barChartData=barDataArray;
	this.barChartLabels=timeFrame;
	

	}
	
	});
	
  }
  public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
 

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

public randomize():void {
 /*  // Only Change 3 values
  let data = [
    Math.round(Math.random() * 100),
    59,
    80,
    (Math.random() * 100),
    56,
    (Math.random() * 100),
    40];
  let clone = JSON.parse(JSON.stringify(this.barChartData));
  clone[0].data = data;
  this.barChartData = clone;
  /**
   * (My guess), for Angular to recognize the change in the dataset
   * it has to change the dataset variable directly,
   * so one way around it, is to clone the data, change it and then
   * assign it;
    */
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad MetricsPage');
  }

}
