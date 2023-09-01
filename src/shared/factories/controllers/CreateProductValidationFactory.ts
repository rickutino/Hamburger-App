import { EmailValidatorAdapter } from "@shared/infra/validators/emailValidatorAdapter"
import { Validation } from "@shared/protocols/validator"
import { EmailValidation } from "@utils/helpers/validators/emailValidation"
import { RequiredFieldValidation } from "@utils/helpers/validators/requiredFieldValidaton"
import { ValidationComposite } from "@utils/helpers/validators/validationComposite"

export const makeCreateProductValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'description', 'price']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}