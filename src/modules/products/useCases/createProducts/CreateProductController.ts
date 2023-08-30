import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateProductUseCase } from './CreateProductUseCase'

class CreateProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price } = request.body
    const createProductUseCase = container.resolve(CreateProductUseCase)

    const product = await createProductUseCase.execute({
      name,
      description,
      price,
    })

    return response.status(201).json(product)
  }
}

export { CreateProductsController }
