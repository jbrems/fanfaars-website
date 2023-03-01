import {
  Component,
  ElementRef,
  forwardRef,
  ViewChild
} from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from "@angular/forms";

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
  @ViewChild('input', { static: true }) private input: ElementRef;

  private onChangeListener: any;
  private onTouchedListener: any;

  registerOnChange(fn: any): void {
    this.onChangeListener = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedListener = fn;
  }

  writeValue(obj: any): void {
    console.log('Setting value', obj);
    this.input.nativeElement.value = obj;
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
    return 36 / this.peopleArray(value).length + 18;
  }

}