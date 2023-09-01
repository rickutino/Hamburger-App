import { CreateProductsController } from '@modules/products/useCases/createProducts/CreateProductController'
// import { makeCreateProductValidation } from '@shared/factories/controllers/CreateProductValidationFactory'
import { Router } from 'express'

const productsRoutes = Router()

const createProductController = new CreateProductsController()
// const createProductController = new CreateProductsController(makeCreateProductValidation())

productsRoutes.post('/', createProductController.handle)

export { productsRoutes }
