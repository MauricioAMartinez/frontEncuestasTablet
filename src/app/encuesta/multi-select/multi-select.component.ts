import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PuenteService } from '../../services/puente.service';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements OnInit {
 
  constructor(private cookieService: CookieService,private _puenteService : PuenteService) { }

  @Input() preguntas: Array<any>;
  respuestaMultiselect:any;

  ngOnInit() {}



  setMultiSelect(){
    if(this.respuestaMultiselect){
      for (let index = 0; index < this.respuestaMultiselect.length; index++) {
        let  respuesta = {
          document:this.cookieService.get('documento'),
          survey_question_id:this.preguntas['id'],
          question_answers_id: this.respuestaMultiselect[index]
        }
        this._puenteService.disparadorPuenteMultiSelect.emit({data:respuesta})
      }
      this.respuestaMultiselect = ''
     }
  }
}
