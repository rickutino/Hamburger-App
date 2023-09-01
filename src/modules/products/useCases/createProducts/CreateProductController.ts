import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateProductUseCase } from './CreateProductUseCase'
// import { Validation } from '@shared/protocols/validator'
// import { badRequest, ok } from '@shared/infra/http/protocols/httpHelper'
// import { HttpResponse } from '@shared/infra/http/protocols/http'
// import { Controller } from '@shared/infra/http/protocols/controller'

export class CreateProductsController {
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

// export namespace CreateProductsController {
//   export type Request = {
//     name: string
//     description: string
//     price: number
//   }
// }
