import { MissingParamError } from '../../../shared/errors'
import { Validation } from "../../../shared/protocols/validator";

export class RequiredFieldValidation implements Validation {
  private readonly fieldName: string
  constructor(fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): Error{
    if(!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}