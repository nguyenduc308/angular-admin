import { genarateFormField } from '@/shared/helpers/genarate-form-fields';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGISTER_CMS_CONFIG } from './register-cms';
@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  form: FormGroup;
  config = REGISTER_CMS_CONFIG;

  constructor(private _fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    let formFields = genarateFormField(this.config.fields);
    this.form = this._fb.group(formFields);
  }
  onFieldChange(e) {
    console.log(e);
  }

  submit() {
    console.log(this.form.value);
  }
}
