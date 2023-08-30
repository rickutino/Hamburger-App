import 'reflect-metadata'
import { inject, injectable } from 'tsyringe'

import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductTDO'
import { Product } from '@modules/products/infra/typeorm/entities/Product'
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository'

@injectable()
class CreateProductUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({
    name,
    description,
    price,
  }: ICreateProductDTO): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      description,
      price,
    })

    return product
  }
}

export { CreateProductUseCase }
