import { AppError } from "@shared/errors/AppError"
import { Validation } from "@shared/protocols/validator"

export class ValidationSpy implements Validation {
  error: AppError = null
  input: any

  validate (input: any): AppError {
    this.input = input
    return this.error = new AppError(input)
  }
}
