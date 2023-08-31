import request from 'supertest'
import { Connection } from 'typeorm'
import { app } from '@shared/infra/http/app'
import createConnection from '@shared/infra/typeorm'

let connection: Connection

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
    const response = await request(app).post('/products').send({
      name: "Electronic Wooden Soap",
      description: "O melhor lanche",
      price: 23,
    })
    
    expect(response.status).toBe(201)
  })

  
  it("should not be able to create a new product with name exists", async () => {
    await request(app).post("/products").send({
      name: "Super lanche",
      description: "O melhor lanche",
      price: 32,
    });

    const response = await request(app).post("/products").send({
      name: "Super lanche",
      description: "lanche X-tudo",
      price: 32,
    });

    expect(response.status).toBe(400);
  });
})
