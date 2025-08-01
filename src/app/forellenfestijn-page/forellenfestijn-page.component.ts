import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ForellenfestijnService } from './forellenfestijn.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './forellenfestijn-page.component.html',
  styleUrls: ['./forellenfestijn-page.component.scss'],
})
export class ForellenfestijnPageComponent implements OnInit {
  today = new Date();
  date: Date;
  reservationFrom: Date;
  reservationUntil: Date;

  reservationForm: UntypedFormGroup;
  arrivalValues: string[];
  submitted = false;
  showUserError = false;
  processing = false;
  success = false;
  error = false;

  constructor(private forellenfestijnService: ForellenfestijnService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.catchDateMocking();
    this.date = this.calculateDate();
    this.reservationFrom = this.calculateShowReservationFormFrom();
    this.reservationUntil = this.calculateShowReservationFormUntil(this.date);
    this.reservationForm = this.setupReservationForm();
  }

  public async sendReservation() {
    this.submitted = true;
    this.showUserError = false;
    this.processing = true;
    this.error = false;

    if (this.reservationForm.invalid) {
      this.showUserError = true;
      this.markAllAsTouched(this.reservationForm);
      this.processing = false;
      return;
    }

    try {
      await this.forellenfestijnService.saveReservation(this.reservationForm.value);
      this.processing = false;
      this.success = true;
    } catch (error) {
      this.processing = false;
      this.error = true;
      console.error(error.message);
    }
  }

  private calculateDate(year: number = this.today.getFullYear()): Date {
    const date = new Date(year, 5, 1, 0, 0, 0, 0);
    while (date.getDay() !== 0) {
      date.setDate(date.getDate() + 1);
    }
    if (this.today > date) {
      return this.calculateDate(date.getFullYear() + 1);
    }
    return date;
  }

  private calculateShowReservationFormFrom(): Date {
    const showReservationFormFrom = this.calculateDate();
    showReservationFormFrom.setMonth(4);
    showReservationFormFrom.setDate(1);
    return showReservationFormFrom;
  }

  private calculateShowReservationFormUntil(date: Date): Date {
    const showReservationFormUntil = new Date(this.calculateDate().getTime() - 3 * 24 * 60 * 60 * 1000 - 4 * 60 * 60 * 1000); // 4 days before the festival at 20:00 (- 3 days and 4 hours)
    return showReservationFormUntil;
  }

  private setupReservationForm(): UntypedFormGroup {
    const form = new UntypedFormGroup({
      name: new UntypedFormControl('', [Validators.required, Validators.minLength(5)]),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      address1: new UntypedFormControl(''),
      address2: new UntypedFormControl(''),
      phone: new UntypedFormControl(''),
      consent: new UntypedFormControl(false),
      persons: new UntypedFormControl(2, [Validators.min(1), Validators.max(30)]),
      arrival: new UntypedFormControl('11:30', [Validators.pattern('[^-]*')]),
      remarks: new UntypedFormControl(''),
      menu: new UntypedFormGroup({
        soup: new UntypedFormControl(0, [Validators.min(0), Validators.max(30)]),
        melon: new UntypedFormControl(0, [Validators.min(0), Validators.max(30)]),
        troutNature: new UntypedFormControl(0, [Validators.min(0), Validators.max(30)]),
        troutAlmond: new UntypedFormControl(0, [Validators.min(0), Validators.max(30)]),
        troutWine: new UntypedFormControl(0, [Validators.min(0), Validators.max(30)]),
        troutArdennaise: new UntypedFormControl(0, [Validators.min(0), Validators.max(30)]),
        volAuVent: new UntypedFormControl(0, [Validators.min(0), Validators.max(30)]),
        volAuVentChild: new UntypedFormControl(0, [Validators.min(0), Validators.max(30)]),
      }),
    });

    this.arrivalValues = ['11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '--------', '17:00', '17:30', '18:00', '18:30', '19:00'];

    return form;
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

  private catchDateMocking() {
    this.route.queryParamMap.subscribe((params) => {
      if (params.has('mockDate')) {
        this.today = new Date(params.get('mockDate'));
      }
    });
  }
}
