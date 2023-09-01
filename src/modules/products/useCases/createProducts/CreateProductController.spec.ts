import request from 'supertest'
import { Connection } from 'typeorm'
import { app } from '@shared/infra/http/app'
import createConnection from '@shared/infra/typeorm'
import { faker}  from '@faker-js/faker'
// import { CreateProductsController } from './CreateProductController'
// import { ValidationSpy } from '@shared/mocks'

let connection: Connection

// const mockRequest = (): CreateProductsController.Request => {
//   return {
//     name: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     price: Number(faker.commerce.price()),
//   }
// }

// type SutTypes = {
//   sut: CreateProductsController
//   validationSpy: ValidationSpy
// }

// const makeSut = (): SutTypes => {
//   const validationSpy = new ValidationSpy()
//   const sut = new CreateProductsController(validationSpy)
//   return {
//     sut,
//     validationSpy
//   }
// }

describe('Create Product Controller', () => {
  beforeAll(async () => {
    connection = await createConnection()
    // Por utilizar database de test rodar as migrations.
    await connection.runMigrations()
  })
  afterAll(async () => {
    await connection.dropDatabase()
    await connection.close()
  })

  it('should be able to create a new product', async () => {
    // const { sut } = makeSut()
    // const request = mockRequest()
    // const response = await sut.handle(request)
    const response = await request(app).post('/products').send({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()),
    })
    
    expect(response.status).toBe(201)
    // expect(response.status).toBe(200)
  })

  
  it("should not be able to create a new product with name exists", async () => {
    // const { sut } = makeSut()
    // const request = mockRequest()
    // const response = await sut.handle(request)
    const name = faker.commerce.productName()
    await request(app).post("/products").send({
      name,
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()),
    });

    const response = await request(app).post("/products").send({
      name,
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price()),
    });

    expect(response.status).toBe(400);
  });
})
