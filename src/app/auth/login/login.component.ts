import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LOGIN_CMS_CONFIG } from './login-cms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  form: FormGroup;
  config = LOGIN_CMS_CONFIG;

  constructor(private _fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    let formFields = {};
    this.config.fields.forEach((item) => {
      const validations = item.validationRules.map((rule) => {
        if (rule.length === 3) {
          return Validators[rule[0]](rule[2]);
        }
        return Validators[rule[0]];
      });
      formFields[item.id] = [item.value, validations];
    });
    this.form = this._fb.group(formFields);
  }
  onFieldChange(e) {
    console.log(e);
  }

  submit() {
    console.log(this.form.value);
  }
}
