import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PuenteService } from '../../services/puente.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {


  constructor(private cookieService: CookieService, private _puenteservice: PuenteService) { }

  @Input() preguntas: Array<any>;
  respuestaInput: string;


  ngOnInit() {

  }

  setInput() {
    if (this.respuestaInput) {
      let respuesta = {
        document: this.cookieService.get('documento'),
        survey_question_id: this.preguntas['id'],
        answer: this.respuestaInput
      }
      this._puenteservice.disparadorPuenteInput.emit({data: respuesta})
      this.respuestaInput = ''
    }
  }
}
