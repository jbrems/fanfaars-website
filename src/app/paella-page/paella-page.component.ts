import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { PaellaService} from './paella.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './paella-page.component.html',
  styleUrls: ['./paella-page.component.scss'],
})
export class PaellaPageComponent implements OnInit, OnDestroy {
  closed = new Date() >= new Date('2022-06-01');

  reservationForm: UntypedFormGroup;
  submitted = false;
  showUserError = false;
  processing = false;
  success = false;
  error = false;

  subscriptions: Subscription[] = [];

  constructor(private paellaService: PaellaService) {}

  ngOnInit(): void {
    this.reservationForm = this.setupReservationForm();
  }

  public async sendReservation() {
    this.submitted = true;
    this.showUserError = false;
    this.processing = true;
    this.error = false;

    if (!this.reservationForm.valid) {
      this.showUserError = true;
      this.markAllAsTouched(this.reservationForm);
      this.processing = false;
      return;
    }

    try {
      await this.paellaService.saveReservation({ ...this.reservationForm.value, totalAmount: this.getTotalAmount() });
      this.processing = false;
      this.success = true;
    } catch (error) {
      this.processing = false;
      this.error = true;
      console.error(error.message);
    }
  }

  private setupReservationForm(): UntypedFormGroup {
    const form = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required, Validators.minLength(5)]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      phone: new UntypedFormControl('', [Validators.required, Validators.minLength(9)]),
      arrival: new UntypedFormControl('tussen 12u00 en 13u00'),
      persons: new UntypedFormControl(0, [Validators.min(1), Validators.max(29)]),
      remarks: new UntypedFormControl(''),
      menu: new UntypedFormGroup({
        tapa: new UntypedFormControl(0, [Validators.min(0), Validators.max(99)]),
        paella: new UntypedFormControl(0, [Validators.min(0), Validators.max(99)]),
        albondigas: new UntypedFormControl(0, [Validators.min(0), Validators.max(99)]),
      }),
    });

    return form;
  }

  get name(): string {
    return this.reservationForm.get('name').value;
  }

  get totalAmount(): number {
    return this.getTotalAmount();
  }

  getTotalAmount() {
    const { paella, tapa, albondigas } = this.reservationForm.value.menu;
    return paella * 18 + tapa * 6 + albondigas * 15;
  }

  private markAllAsTouched(formGroup: UntypedFormGroup) {
    Object.keys(formGroup.controls).forEach((formControlName => {
      const child: AbstractControl = formGroup.controls[formControlName];
      if (child instanceof UntypedFormGroup) {
        this.markAllAsTouched(child);
      } else if (child instanceof UntypedFormControl) {
        child.markAsTouched();
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
