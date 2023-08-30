import { Product } from '@modules/products/infra/typeorm/entities/Product'
import { IProductsRepository } from '../IProductsRepository'
import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductTDO'
import { AppError } from '@shared/errors/AppError'

class ProductsRepositoryInMemory implements IProductsRepository {
  products: Product[] = []

  async create({
    name,
    description,
    price,
  }: ICreateProductDTO): Promise<Product> {
    const product = new Product()

    Object.assign(product, {
      name,
      description,
      price,
    })

    this.products.push(product)
    return product
  }

  async findByName(name: string): Promise<Product> {
    return this.products.find((product) => product.name === name)
  }
}

export { ProductsRepositoryInMemory }
