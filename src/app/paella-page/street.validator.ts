import {UntypedFormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const streetValidator: ValidatorFn = (control: UntypedFormGroup): ValidationErrors | null => {
  const delivery = control.get('delivery');
  const street = control.get('street');

  if (delivery.value === true && street.value.length < 5) {
    street.setErrors({ required: true });
    return { streetRequired: true };
  }
  return null;
};
