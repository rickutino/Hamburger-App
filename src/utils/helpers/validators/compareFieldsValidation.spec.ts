import { InvalidParamError } from "@shared/errors"
import { CompareFieldsValidation } from "./compareFieldsValidation"


const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('field', 'fieldToCompare')
}

describe('RequiredField Validation', () => {
  test('Should return a CompareFieldsValidation if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_value', fieldToCompare: 'wrong_value' })

    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })
})