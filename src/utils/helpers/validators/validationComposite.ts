import { AppError } from "@shared/errors/AppError"
import { Validation } from "@shared/protocols/validator"

export class ValidationComposite implements Validation {
  constructor (private readonly validations: Validation[]) {}

  validate (input: any): AppError {
    for (const validation of this.validations) {
      const error = validation.validate(input)
      if (error) {
        return error
      }
    }
  }
}