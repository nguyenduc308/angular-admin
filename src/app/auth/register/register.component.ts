import { genarateFormField } from '@/shared/helpers/genarate-form-fields';
import { IFormField } from '@/shared/interfaces/form-field';
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGISTER_CMS_CONFIG } from './register-cms';
@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  form: FormGroup;
  fields: IFormField[];
  config = REGISTER_CMS_CONFIG;

  constructor(
    private _fb: FormBuilder,
    private readonly cdr: ChangeDetectorRef
    ) {
    this.createForm();
  }

  createForm() {
    this.fields = Object.values(this.config.fields);
    let formFields = genarateFormField(this.config.fields);
    if (formFields.confirmPassword) {
      this.config.fields['confirmPassword']?.validationRules?.push(['confirmPassword', 'Confirm Password do not match'])
      formFields.confirmPassword[1].push(this.validateConfirmPassword.bind(this));
      this.cdr.markForCheck();
    }
    this.form = this._fb.group(formFields);
  }
  onFieldChange(e) {
    console.log(e);
  }

  submit() {
    console.log(this.form.value);
  }
  validateConfirmPassword(control): {[key: string]: any} {
    return {}
  }
}
