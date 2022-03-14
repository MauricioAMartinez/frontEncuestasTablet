import { Injectable, Output ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuenteService {
  @Output() disparadorPuenteInput: EventEmitter<any> = new EventEmitter();
  @Output() disparadorPuenteSelect: EventEmitter<any> = new EventEmitter();
  @Output() disparadorPuenteMultiSelect: EventEmitter<any> = new EventEmitter();
  @Output() disparadorPuenteTime: EventEmitter<any> = new EventEmitter();
  @Output() disparadorPuenteDate: EventEmitter<any> = new EventEmitter();
  @Output() disparadorPuenteRadio: EventEmitter<any> = new EventEmitter();
  @Output() disparadorPuenteTextArea: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
