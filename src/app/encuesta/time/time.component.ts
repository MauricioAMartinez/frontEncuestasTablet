
import { Component, Input, OnInit } from '@angular/core';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { CookieService } from 'ngx-cookie-service';
import { PuenteService } from 'src/app/services/puente.service';



@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  
  constructor(private cookieService: CookieService,private _puenteService : PuenteService) {}

  @Input() preguntas:Array<any>;
  respuestaTime = format(new Date,'HH:mm') ;

  ngOnInit(){}

  setTime(){
    if(this.respuestaTime){
      let respuesta = {
        document:this.cookieService.get('documento'),
        survey_question_id:this.preguntas['id'],
        answer: this.respuestaTime
      }
      this._puenteService.disparadorPuenteTime.emit({data: respuesta})
    }
  }

  CambioFecha(event){}

}
