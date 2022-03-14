import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { PuenteService } from '../services/puente.service';
import { AnswerService } from '../services/answer.service';
import { TimeComponent } from './time/time.component';
import { DateComponent } from './date/date.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { RadioComponent } from './radio/radio.component';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
})
export class EncuestaPage implements OnInit  {

  @ViewChild(InputComponent) 
  input:InputComponent;
  @ViewChild(SelectComponent) 
  select:SelectComponent;
  @ViewChild(MultiSelectComponent) 
  multiselect:MultiSelectComponent;
  @ViewChild(TimeComponent) 
  time:TimeComponent;
  @ViewChild(DateComponent) 
  date:DateComponent;
  @ViewChild(RadioComponent) 
  radio:RadioComponent;
  @ViewChild(TextAreaComponent) 
  textArea:TextAreaComponent;


  constructor(private cookieService: CookieService,
    private router: Router,
    private alertController: AlertController,
    private _puenteService:PuenteService,
    private _answerService:AnswerService) { }

    preguntas: Array<any> = []
    respuestas: Array<any>=[]


  ngOnInit() {

    this.preguntas = JSON.parse(localStorage.getItem('preguntas')) 
    this.getRespuestas();

  }


  setRespuestas(){

    this.input.setInput();
    this.select.setSelect();
    this.multiselect.setMultiSelect()
    this.time.setTime()
    this.date.setDate()
    this.radio.setRadio()
    this.textArea.setTextArea()


    if(this.respuestas){
      this._answerService.putAnswers(this.respuestas).subscribe(response =>{})
      this.presentAlert()
      this.cookieService.deleteAll();
      localStorage.clear();
      this.router.navigate(['home'])
    }
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enviado correctamente ',
      message: 'Gracias tu opinion es importante',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  getRespuestas(){

    this._puenteService.disparadorPuenteInput.subscribe(data =>{
      this.respuestas.push(data.data)
    })
    this._puenteService.disparadorPuenteMultiSelect.subscribe(data=>{
      this.respuestas.push(data.data)
      
    })
    this._puenteService.disparadorPuenteSelect.subscribe(data=>{
      this.respuestas.push(data.data)
      
    })

    this._puenteService.disparadorPuenteTime.subscribe(data=>{
      this.respuestas.push(data.data)
    })
    this._puenteService.disparadorPuenteDate.subscribe(data=>{
      this.respuestas.push(data.data)
    })
    this._puenteService.disparadorPuenteRadio.subscribe(data=>{
      this.respuestas.push(data.data)
    })
    this._puenteService.disparadorPuenteTextArea.subscribe(data=>{
      this.respuestas.push(data.data)
    })
  }
}
