import { faker } from '@faker-js/faker'
import { ValidationComposite } from './validationComposite'
import { ValidationSpy } from '@shared/mocks/mockValidation'
import { AppError } from '@shared/errors/AppError'

const field = faker.lorem.word()

type SutTypes = {
  sut: ValidationComposite
  validationSpies: ValidationSpy[]
}

const makeSut = (): SutTypes => {
  const validationSpies = [
    new ValidationSpy(),
    new ValidationSpy()
  ]
  const sut = new ValidationComposite(validationSpies)
  return {
    sut,
    validationSpies
  }
}

describe('Validation Composite', () => {
  test('Should return an error if any   fails', () => {
    const { sut, validationSpies } = makeSut()
    validationSpies[1].error = new AppError(field)
    const error = sut.validate(field)
    expect(error).toEqual(validationSpies[1].error)
  })

  test('Should return the first error if more then one validation fails', () => {
    const { sut, validationSpies } = makeSut()
    validationSpies[0].error = new AppError(null)
    validationSpies[1].error = new AppError(field)
    const error = sut.validate({ [field]: faker.lorem.word() })
    expect(error).toEqual(validationSpies[0].error)
  })
})