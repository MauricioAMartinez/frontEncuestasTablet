import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PuenteService } from 'src/app/services/puente.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {

  constructor(private cookieService: CookieService, private _puenteService : PuenteService) { }

  @Input() preguntas:Array<any>;
  respuestaTextArea:string;
  
  ngOnInit() {}

  setTextArea(){

    if(this.respuestaTextArea){
      let respuesta = {
        document:this.cookieService.get('documento'),
        survey_question_id:this.preguntas['id'],
        answer:this.respuestaTextArea
      }
      this._puenteService.disparadorPuenteTextArea.emit({data: respuesta})
      this.respuestaTextArea = ''
    }
    
  }

}
