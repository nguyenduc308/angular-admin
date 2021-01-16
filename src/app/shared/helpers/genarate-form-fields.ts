import { Validators } from "@angular/forms";
import { IFormField } from "../interfaces/form-field"

export const genarateFormField = (fields: {[field: string]: IFormField}): {[key: string]: any[]} => {
  if (!fields || typeof fields !== 'object') {
    return {};
  }
  return Object.values(fields).reduce((acc, item) => {
    const validations = item.validationRules.map((rule) => {
      if (rule.length === 3) {
        return Validators[rule[0]](rule[2]);
      }
      return Validators[rule[0]];
    });
    return {
      ...acc,
      [item.id]: [item.value, validations],
    }
  }, {});;
}
