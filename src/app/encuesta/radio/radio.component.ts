import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PuenteService } from 'src/app/services/puente.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  
  constructor(private cookieService: CookieService,private _puenteService : PuenteService) { }

  @Input() preguntas:Array<any>;
  respuestaRadio:string;

  ngOnInit() { }

  setRadio(){
    if(this.respuestaRadio){ 
      let  respuesta = {
        document:this.cookieService.get('documento'),
        survey_question_id:this.preguntas['id'],
        question_answers_id: this.respuestaRadio
      }
      this._puenteService.disparadorPuenteRadio.emit({ data: respuesta})
      this.respuestaRadio = ''
    }
  }
}
