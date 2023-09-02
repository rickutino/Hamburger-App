import { AppError } from "@shared/errors/AppError"
import { Validation } from "@shared/protocols/validator"

export class CompareFieldsValidation implements Validation {
  private readonly fieldName: string
  private readonly fieldToCompareName: string

  constructor (fieldName: string, fieldToCompareName: string) {
    this.fieldName = fieldName
    this.fieldToCompareName = fieldToCompareName
  }

  validate (input: any): AppError {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new AppError(this.fieldToCompareName)
    }
  }
}