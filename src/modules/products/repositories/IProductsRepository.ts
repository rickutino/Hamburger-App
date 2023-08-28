import { ICreateProductDTO } from '../dtos/ICreateProductTDO'
import { Product } from '../infra/typeorm/entities/Product'

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>
}

export { IProductsRepository }
