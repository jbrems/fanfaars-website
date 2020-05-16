import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
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

  reservationForm: FormGroup;
  arrivalValues: string[];
  submitted = false;
  showUserError = false;
  processing = false;
  success = false;
  error = false;

  constructor(private forellenfestijnService: ForellenfestijnService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/paella']);

    this.catchDateMocking();
    this.date = this.calculateDate();
    this.reservationFrom = this.calculateShowReservationFormFrom();
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

  private setupReservationForm(): FormGroup {
    const form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      persons: new FormControl(2, [Validators.min(1), Validators.max(99)]),
      arrival: new FormControl('11u30'),
      remarks: new FormControl(''),
      menu: new FormGroup({
        soup: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        melon: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        troutNature: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        troutAlmond: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        troutWine: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        troutArdennaise: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        volAuVent: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        volAuVentChild: new FormControl(0, [Validators.min(0), Validators.max(99)]),
      }),
    });

    this.arrivalValues = ['11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '17:00', '17:30', '18:00', '18:30', '19:00'];

    return form;
  }

  private markAllAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((formControlName => {
      const child: AbstractControl = formGroup.controls[formControlName];
      if (child instanceof FormGroup) {
        this.markAllAsTouched(child);
      } else if (child instanceof FormControl) {
        child.markAsTouched();
      }
    }));
  }

  private catchDateMocking() {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
      if (params.has('mockDate')) {
        this.today = new Date(params.get('mockDate'));
      } else {
        this.today = new Date();
      }
    });
  }
}
