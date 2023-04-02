import {
  AfterViewInit,
  Component,
  forwardRef,
  Injector,
  OnInit
} from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  NgControl
} from "@angular/forms";

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TimeInputComponent),
    }
  ],
})
export class TimeInputComponent implements ControlValueAccessor, AfterViewInit {
  public ngControl: NgControl;
  public control: FormControl;
  public arrivalValues = ['11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '--------', '17:00', '17:30', '18:00', '18:30', '19:00'];

  private onChangeListener: any;
  private onTouchedListener: any;

  constructor(private injector: Injector) {}

  public ngAfterViewInit() {
    this.ngControl = this.injector.get(NgControl);
    this.control = this.injector.get(NgControl).control as FormControl;
  }

  registerOnChange(fn: any): void {
    this.onChangeListener = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedListener = fn;
  }

  writeValue(obj: any): void {
  }

  public get hourBlips(): number[] {
    return new Array(12).fill(0).map((_, index) => index * 30);
  }

  public getCircleCoords(radius: number, degrees: number): { x: number, y: number } {
    return {
      x: Math.cos(degrees / 180 * Math.PI) * radius + 50,
      y: Math.sin(degrees / 180 * Math.PI) * radius + 50,
    };
  }

  public getHourPointerCoords(radius: number): { x: number, y: number } | undefined {
    if (!this.control?.value) return;

    const [hour, minutes] = this.control.value.split(':').map(Number);
    const degrees = hour * 30 + minutes * 0.5;

    return {
      x: Math.cos(degrees / 180 * Math.PI) * radius + 50,
      y: Math.sin(degrees / 180 * Math.PI) * radius + 50,
    };
  }

  public getMinutePointerCoords(radius: number): { x: number, y: number } {
    if (!this.control?.value) return;
    return {
      x: Math.cos(Number(this.control.value.split(':')[1]) * 6 / 180 * Math.PI) * radius + 50,
      y: Math.sin(Number(this.control.value.split(':')[1]) * 6 / 180 * Math.PI) * radius + 50,
    };
  }
}