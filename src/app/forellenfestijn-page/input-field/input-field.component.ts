import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputFieldComponent),
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor {
  fieldId = Math.random().toString().slice(2, 10);
  labelOnTop = false;

  @ViewChild('inputField') inputField: ElementRef;

  @Input() label?: string;
  @Input() type?: string = 'text';

  onChangeListener: any = () => {};
  onTouchedListener: any = () => {};

  onFocus() {
    this.labelOnTop = true;
  }

  onBlur() {
    this.labelOnTop = !!this.inputField.nativeElement.value;
    this.onTouchedListener();
  }

  onChange() {
    this.onChangeListener(this.inputField.nativeElement.value);
  }

  registerOnChange(fn: any): void {
    this.onChangeListener = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedListener = fn;
  }

  writeValue(value: string | number): void {
    this.inputField.nativeElement.value = value;
    this.labelOnTop = !!value;
  }
}
