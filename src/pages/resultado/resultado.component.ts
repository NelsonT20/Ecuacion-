import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * @author Nelson Torres <github: github.com/NelsonT20> <email:nelsondaniel88@gmail.com>
 * @license <Nelson Torres>
 * @description 
 * Resultado de la aplicacion
 * 
 */

@Component({
  selector: 'page-resultado',
  templateUrl: 'resultado.component.html'
})

export class ResultadoPage {
  public valor1: any;
  public valor2: any;

  constructor(
              private navCtrl   :NavController,
              private navParams :NavParams
  ){
  
} 

  ionViewDidLoad(){
    let resu1 = this.navParams.get('first');
    let resu2 = this.navParams.get('second');
    let a = this.navParams.get('primero');
    let b = this.navParams.get('segundo');
    let c = this.navParams.get('tercero');

    if(a == 0){
      this.valor1 = 'No es una funcion cuadratica';
      this.valor2 = 'No es una funcion cuadratica';
    }else if(a == 1 && b==1 && c==1){
        this.valor1 = 'Las raices no son reales';
      this.valor2 = 'Las raices no son reales';
    }else {
        this.valor1 = resu1 ;
        this.valor2 = resu2 ;
    }

    
  }

  goBack(){
    this.navCtrl.pop();
  }


  
}