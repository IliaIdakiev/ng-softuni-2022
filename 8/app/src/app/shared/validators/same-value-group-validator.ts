import { FormGroup, ValidatorFn } from "@angular/forms";

export function sameValueGroupValidator(controlName1: string, controlName2: string): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const ctrl1 = group.get(controlName1);
    const ctrl2 = group.get(controlName2)
    return ctrl1?.value === ctrl2?.value ? null : { sameValueGroupValidator: true };
  };
}