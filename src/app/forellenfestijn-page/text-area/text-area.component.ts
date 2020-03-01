import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextAreaComponent),
    }
  ],
})
export class TextAreaComponent implements ControlValueAccessor {
  @Input() label?: string;

  @ViewChild('textArea') textArea: ElementRef;

  onChangeListener: any = () => {};
  onTouchedListener: any = () => {};

  registerOnChange(fn: any): void {
    this.onChangeListener = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedListener = fn;
  }

  writeValue(value: string): void {
    this.textArea.nativeElement.value = value;
  }

  onChange() {
    this.onChangeListener(this.textArea.nativeElement.value);
  }

  onBlur() {
    this.onTouchedListener();
  }
}
