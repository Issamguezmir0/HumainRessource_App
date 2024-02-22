import { AbstractControl} from "@angular/forms";

export function MustMatch(control: AbstractControl): {[key: string]: boolean} | null  {
    const password = control.get('newPass')
    const confirmPassword = control.get('confirmPassword')
    return password && confirmPassword && password.value !== confirmPassword.value ? 
    {'misMatch': true} :
    null;
}
