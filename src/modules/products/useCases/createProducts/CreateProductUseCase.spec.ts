import { CreateProductUseCase } from './CreateProductUseCase'
import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'
import { faker } from '@faker-js/faker'

let createProductUseCase: CreateProductUseCase
let productsRepositoryInMemory: ProductsRepositoryInMemory

describe('Create Car', () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory()
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory)
  })

  it('should be able to create a new product', async () => {
    const product = await createProductUseCase.execute({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price),
    })

    expect(product).toHaveProperty('id')
  })

  it('should not be able to create a product with exists some product name', async () => {
    const productName = faker.commerce.productName()
    await createProductUseCase.execute({
      name: productName,
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price),
    })

    await expect(
      createProductUseCase.execute({
        name: productName,
        description: faker.commerce.productDescription(),
        price: Number(faker.commerce.price),
      }),
    ).rejects.toEqual(new AppError('Product already exists!'))
  })
})
