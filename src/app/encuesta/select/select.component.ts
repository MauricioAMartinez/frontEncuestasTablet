import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PuenteService } from 'src/app/services/puente.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
 
  constructor(private cookieService: CookieService,private _puenteService : PuenteService){}
  @Input() preguntas:Array<any>;
  respuestaSelect:string;

  ngOnInit(): void {}

  setSelect(){
    if(this.respuestaSelect){
      let  respuesta = {
        document:this.cookieService.get('documento'),
        survey_question_id:this.preguntas['id'],
        question_answers_id: this.respuestaSelect
      }
      this._puenteService.disparadorPuenteSelect.emit({data: respuesta})
      this.respuestaSelect = ''
    }
  }
}
