import { Component, Input, OnInit } from '@angular/core';
import { format} from 'date-fns'
import { CookieService } from 'ngx-cookie-service';
import { PuenteService } from 'src/app/services/puente.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent  {
  
  constructor(private _puenteService : PuenteService,private cookieService: CookieService) { }

  @Input() preguntas:Array<any>;
  respuestaDate = format(new Date,'yyyy-MM-dd') ;


  setDate(){
    if(this.respuestaDate){
      let respuesta = {
        document:this.cookieService.get('documento'),
        survey_question_id:this.preguntas['id'],
        answer: this.respuestaDate
      }
      this._puenteService.disparadorPuenteTime.emit({data: respuesta})
    }
  }

  CambioFecha(event){ }
}
