import { Component, ElementRef, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectListComponent),
    }
  ],
})
export class SelectListComponent implements ControlValueAccessor {
  selectListId = Math.random().toString().slice(2, 10);

  @Input() label: string;
  @Input() values: string[];

  selectedValue: string;

  @ViewChild('selectList', { static: true }) selectList: ElementRef;

  onChangeListener: any = () => {};
  onTouchedListener: any = () => {};

  registerOnChange(fn: any): void {
    this.onChangeListener = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedListener = fn;
  }

  writeValue(value: string): void {
    this.selectedValue = value;
  }

  onBlur() {
    this.onTouchedListener();
  }

  onChange() {
    this.selectedValue = this.selectList.nativeElement.value;
    this.onChangeListener(this.selectList.nativeElement.value);
  }
}
