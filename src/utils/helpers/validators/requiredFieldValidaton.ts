import { AppError } from '@shared/errors/AppError';
import { Validation } from "../../../shared/protocols/validator";

export class RequiredFieldValidation implements Validation {
  private readonly fieldName: string
  constructor(fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): AppError{
    if(!input[this.fieldName]) {
      return new AppError(this.fieldName)
    }
  }
}