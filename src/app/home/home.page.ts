import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
/*- Cada KM rodado custa R$3,50 (o usuário digita quantos km foram rodados)*/
km='';
ValorBruto=0;
ValorDoMotorista=0;
ValorDoAPP=0;

constructor(private alertController: AlertController) {}
Calculo(){
this.ValorBruto=parseFloat(this.km)* 3.5
  if ((this.ValorBruto)>=150){
    this.ValorDoMotorista=(this.ValorBruto) *0.8
    this.ValorDoAPP=(this.ValorBruto)*0.2
  }
  else{
    this.ValorDoMotorista=(this.ValorBruto)*0.75
    this.ValorDoAPP=(this.ValorBruto)*0.25
  }
}
}
