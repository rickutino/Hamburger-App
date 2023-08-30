import { IProductsRepository } from '@modules/products/repositories/IProductsRepository'
import { Repository, getRepository } from 'typeorm'
import { Product } from '../entities/Product'
import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductTDO'

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>

  construct() {
    this.repository = getRepository(Product)
  }

  async create({
    name,
    description,
    price,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create({
      name,
      description,
      price,
    })

    await this.repository.save(product)

    return product
  }

  async findByName(name: string): Promise<Product> {
    return await this.repository.findOne({ name })
  }
}

export { ProductsRepository }
