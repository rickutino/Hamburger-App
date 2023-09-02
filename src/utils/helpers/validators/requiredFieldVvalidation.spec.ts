import { AppError } from "@shared/errors/AppError"
import { RequiredFieldValidation } from "./requiredFieldValidaton"

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}

describe('RequiredField Validation', () => {
  test('Should return a MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'any_name' })

    expect(error).toEqual(new AppError('field'))
  })

  test('Should not return if validation success', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_name' })

    expect(error).toBeFalsy()
  })
})