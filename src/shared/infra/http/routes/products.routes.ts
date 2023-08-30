import { CreateProductsController } from '@modules/products/useCases/createProducts/CreateProductController'
import { Router } from 'express'

const productsRoutes = Router()

const createProductController = new CreateProductsController()

productsRoutes.post('/', createProductController.handle)

export { productsRoutes }
