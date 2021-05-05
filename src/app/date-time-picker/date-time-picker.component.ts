import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR, FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'date-time-picker',
  templateUrl: 'date-time-picker.component.html',
  styleUrls: ['date-time-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateTimePickerComponent),
    multi: true
  },
    { provide: MAT_DATE_LOCALE,
      useValue: 'en-US',
      useExisting: forwardRef(() => DateTimePickerComponent),
      multi: true
    }]
})

export class DateTimePickerComponent implements ControlValueAccessor {
  Form = new FormGroup({
    fcDate: new FormControl(''),
    fcTime: new FormControl(''),
  });

  dtn: number = Date.now();
  selectedTime = 16;
  selectedDate = new Date(0);
  selectedDateTime: any
  ActivationDate = new Date(this.dtn);
  picker: any;
  minDate = new Date(this.dtn);
  maxDate = new Date(this.dtn + (3600 * 1000 * 24 * 90));

  dateChanged() {
    this.selectedDate = this.Form.value.fcDate
    this.dtUpdate()
  }

  timeChanged() {
    this.selectedTime = this.Form.value.fcTime
    this.dtUpdate();
  }

  dtUpdate(){
    let x = this.selectedDate.getTime() + (this.selectedTime * 1800000);
    this.ActivationDate = new Date(x);
    this.selectedDateTime = new DatePipe('en-US').transform(this.ActivationDate, 'dd/MM/yyyy hh:mm a')
  }

  onChange(_: any) {}

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  writeValue() {
  }

  registerOnTouched() {
  }
}
