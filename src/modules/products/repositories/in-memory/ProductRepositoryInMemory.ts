import { Product } from '@modules/products/infra/typeorm/entities/Product'
import { IProductsRepository } from '../IProductsRepository'
import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductTDO'

class ProductRepositoryInMemory implements IProductsRepository {
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
}

export { ProductRepositoryInMemory }
