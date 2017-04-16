import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultadoPage }     from '../resultado/resultado.component'

/**
 * @author Nelson Torres <github: github.com/NelsonT20> <email:nelsondaniel88@gmail.com>
 * @license <Nelson Torres>
 * @description 
 * Inicio de la aplicacion
 * 
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public valor1 : any;
  public valor2 : any;
  public valor3 : any;
  // public x1 : any;
  // public x2 : any;
  constructor(public navCtrl: NavController,
  
    ) {

  }

  ionViewDidLeave(){
    this.valor1 = '';
    this.valor2 = '';
    this.valor3 = '';
  }

  Calcular(){
    let x1: any;
    let x2: any;
    let a: any;
    let b: any;
    let c: any;
   
    a = this.valor1;
    b = this.valor2;
    c = this.valor3;

        x1 = ((-b + (Math.sqrt( (b * b) + (- 4 * (a * c) ) ) ) )/(2 * a));

        x2 = ((-b - (Math.sqrt( (b * b) + (- 4 * (a * c) ) ) ) )/(2 * a));

     let valuex = {
       'first': x1,
       'second': x2,
       'primero': a,
       'segundo': b,
       'tercero': c
     }

    this.navCtrl.push(ResultadoPage,valuex);
  }

}
