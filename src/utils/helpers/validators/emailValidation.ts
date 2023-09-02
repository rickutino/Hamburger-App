
import { AppError } from "@shared/errors/AppError"
import { EmailValidator } from "@shared/protocols/emailValidator"
import { Validation } from "@shared/protocols/validator"

export class EmailValidation implements Validation {
  private readonly fieldName: string
  private readonly emailValidator: EmailValidator

  constructor (fieldName: string, emailValidator: EmailValidator) {
    this.fieldName = fieldName
    this.emailValidator = emailValidator
  }

  validate (input: any): AppError {
    const isValid = this.emailValidator.isValid(input[this.fieldName])
    if (!isValid) {
      return new AppError(this.fieldName)
    }
  }
}