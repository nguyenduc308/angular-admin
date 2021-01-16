import { Component, ViewEncapsulation } from '@angular/core';

import { genarateFormField } from '@/shared/helpers/genarate-form-fields';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LOGIN_CMS_CONFIG } from './login-cms';
import { IFormField } from '@/shared/interfaces/form-field';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  form: FormGroup;
  config = LOGIN_CMS_CONFIG;
  fields: IFormField[];

  constructor(
    private readonly _fb: FormBuilder,
    ) {
    this.createForm();
  }

  createForm() {
    this.fields = Object.values(this.config.fields)
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
