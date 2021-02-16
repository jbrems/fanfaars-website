import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaellaService} from './paella.service';
import { Subscription } from 'rxjs';
import { streetValidator } from './street.validator';
import { DOCUMENT } from '@angular/common';
import * as qrCode from 'qrcode';

@Component({
  templateUrl: './paella-page.component.html',
  styleUrls: ['./paella-page.component.scss'],
})
export class PaellaPageComponent implements OnInit, OnDestroy, AfterViewInit {
  reservationForm: FormGroup;
  submitted = false;
  showUserError = false;
  processing = false;
  success = false;
  error = false;

  takeawayId = '';
  deliveryId = '';
  transferId = '';
  cashId = '';

  copyBankNrStatus = 'kopieer rekeningnummer';

  subscriptions: Subscription[] = [];

  constructor(private paellaService: PaellaService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.reservationForm = this.setupReservationForm();
    this.mimicRadioButtons();
  }

  private mimicRadioButtons() {
    this.subscriptions.push(this.reservationForm.get('takeaway').valueChanges.subscribe((value) => {
      if (value) {
        this.reservationForm.patchValue({ delivery: false }, { emitEvent: false });
        this.reservationForm.get('street').updateValueAndValidity();
      } else {
        this.reservationForm.patchValue({ takeaway: true }, { emitEvent: false });
      }
    }));

    this.subscriptions.push(this.reservationForm.get('delivery').valueChanges.subscribe((value) => {
      if (value) {
        this.reservationForm.patchValue({ takeaway: false }, { emitEvent: false });
      } else {
        this.reservationForm.patchValue({ delivery: true }, { emitEvent: false });
      }
    }));

    this.subscriptions.push(this.reservationForm.get('transfer').valueChanges.subscribe((value) => {
      if (value) {
        this.reservationForm.patchValue({ cash: false }, { emitEvent: false });
      } else {
        this.reservationForm.patchValue({ transfer: true }, { emitEvent: false });
      }
    }));

    this.subscriptions.push(this.reservationForm.get('cash').valueChanges.subscribe((value) => {
      if (value) {
        this.reservationForm.patchValue({ transfer: false }, { emitEvent: false });
      } else {
        this.reservationForm.patchValue({ cash: true }, { emitEvent: false });
      }
    }));
  }

  ngAfterViewInit(): void {
    this.takeawayId = document.querySelectorAll('input[type="checkbox"]')[0].id;
    this.deliveryId = document.querySelectorAll('input[type="checkbox"]')[1].id;
    this.transferId = document.querySelectorAll('input[type="checkbox"]')[2].id;
    this.cashId = document.querySelectorAll('input[type="checkbox"]')[3].id;
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
      this.updateQrCode();
    } catch (error) {
      this.processing = false;
      this.error = true;
      console.error(error.message);
    }
  }

  private setupReservationForm(): FormGroup {
    const form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(9)]),
      takeaway: new FormControl(true),
      takeawayPeriod: new FormControl('tussen 12u00 en 13u00'),
      delivery: new FormControl(false),
      street: new FormControl(''),
      city: new FormControl('2830 Blaasveld', [Validators.required]),
      deliveryPeriod: new FormControl('tussen 12u00 en 13u00'),
      remarks: new FormControl(''),
      menu: new FormGroup({
        paella: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        tapa: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        cava: new FormControl(0, [Validators.min(0), Validators.max(99)]),
        wine: new FormControl(0, [Validators.min(0), Validators.max(99)]),
      }),
      transfer: new FormControl(true),
      cash: new FormControl(false),
    }, {validators: streetValidator});

    return form;
  }

  get name(): string {
    return this.reservationForm.get('name').value;
  }

  get transfer(): boolean {
    return this.reservationForm.get('transfer').value;
  }

  get cash(): boolean {
    return this.reservationForm.get('cash').value;
  }

  get totalAmount(): number {
    return this.getTotalAmount();
  }

  getTotalAmount() {
    const { paella, tapa, cava, wine} = this.reservationForm.value.menu;
    return paella * 15 + tapa * 6 + cava * 12 + wine * 11;
  }

  copyBankNr() {
    (navigator as any).clipboard.writeText('BE39 7895 8983 7719').then(
      () => this.copyBankNrStatus = '✔️',
      () => this.copyBankNrStatus = '❌'
    );
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

  private updateQrCode(): void {
    setTimeout(() => {
      const canvas = this.document.querySelector('canvas#qr-code');
      const sepaData = ['BCD', '002', 1, 'SCT', '', 'Fanfare Blaasveld', 'BE39789589837719', `EUR${this.totalAmount}.00`, '', '', `Paella ${this.name}`, ''].join('\n');
      qrCode.toCanvas(canvas, sepaData);
    }, 500);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
