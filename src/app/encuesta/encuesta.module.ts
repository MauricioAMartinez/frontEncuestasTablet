import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncuestaPageRoutingModule } from './encuesta-routing.module';

import { EncuestaPage } from './encuesta.page';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { TextAreaComponent } from './text-area/text-area.component';

import { MultiSelectComponent } from './multi-select/multi-select.component';
import { ObjToArrayPipe } from '../objToArray.pipe';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncuestaPageRoutingModule,
    
    
  ],
  declarations: [ObjToArrayPipe,MultiSelectComponent,EncuestaPage,CheckboxComponent,InputComponent,RadioComponent,SelectComponent,TextAreaComponent,DateComponent,TimeComponent]
})
export class EncuestaPageModule {}
