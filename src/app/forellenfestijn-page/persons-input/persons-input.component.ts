import {
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Optional,
  Self,
  ViewChild
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl
} from "@angular/forms";
import {
  InputFieldComponent
} from "../input-field/input-field.component";

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PersonsInputComponent),
    }
  ],
})
export class PersonsInputComponent implements ControlValueAccessor {
  @ViewChild(InputFieldComponent, { static: true }) private inputField: InputFieldComponent;

  private onChangeListener: any;
  private onTouchedListener: any;

  constructor(private injector: Injector) {
  }

  registerOnChange(fn: any): void {
    this.onChangeListener = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedListener = fn;
  }

  writeValue(obj: any): void {
    this.inputField.writeValue(obj);
  }

  public onChange(event: Event) {
    console.log('Value changed', (event.target as HTMLInputElement).value);
    this.onChangeListener((event.target as HTMLInputElement).value || 0);
  }

  public numberAsArray(n: string): any[] {
    return Array(Number(n)).fill(0);
  }

  public peopleArray(value: string): string[][] {
    const n = Number(value);
    if (n < 1) return [['error']];
    if (n === 1) return [['person']];
    if (n === 2) return [['person', 'person']];
    if (n === 3) return [['person', 'person'],['person']];
    if (n === 4) return [['person', 'person'],['person', 'person']];
    if (n === 5) return [['person', 'person', 'person'],['person', 'person']];
    if (n === 6) return [['person', 'person', 'person'],['person', 'person'],['person']];
    if (n === 7) return [['person', 'person'],['person', 'person', 'person'],['person', 'person']];
    if (n === 8) return [['person', 'person', 'person'],['person', 'person', 'person'],['person', 'person']];
    if (n === 9) return [['person', 'person', 'person', 'person'],['person', 'person', 'person'],['person', 'person']];
    if (n > 9 && n <= 99) return [['person', 'person', 'person'],['person', 'person', 'person', 'person'],['person', 'person', 'person']];
    if (n > 99) return [['error']];
  }

  public personSize(value: string): number {
    let size = 21 / this.peopleArray(value).length + 24;
    if (Number(value) === 5) size -= 2;
    if (Number(value) >= 9) size -= 6;
    return size;
  }

  public get control (): FormControl {
    return this.injector.get(NgControl).control as FormControl;
  }

  public increment (): void {
    console.log(this.control);
    if (this.control.value >= 99) return;
    this.control.setValue(Number(this.control.value) + 1);
  }

  public substract (): void {
    if (this.control.value <= 1) return;
    this.control.setValue(Number(this.control.value) - 1);
  }

}