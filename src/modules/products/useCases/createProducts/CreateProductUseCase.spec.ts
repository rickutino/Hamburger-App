import { CreateProductUseCase } from './CreateProductUseCase'
import { ProductsRepositoryInMemory } from '@modules/products/repositories/in-memory/ProductsRepositoryInMemory'
import { AppError } from '@shared/errors/AppError'

let createProductUseCase: CreateProductUseCase
let productsRepositoryInMemory: ProductsRepositoryInMemory

describe('Create Car', () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory()
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory)
  })

  it('should be able to create a new product', async () => {
    const product = await createProductUseCase.execute({
      name: "burger",
      description: "good burger",
      price: 32,
    })

    expect(product).toHaveProperty('id')
  })

  it('should not be able to create a product with exists some product name', async () => {
    const productName = "XBurger"
    await createProductUseCase.execute({
      name: productName,
      description: "good burger",
      price: 32,
    })

    await expect(
      createProductUseCase.execute({
        name: productName,
        description: "good burger",
        price: 32,
      }),
    ).rejects.toEqual(new AppError('Product already exists!'))
  })
})
