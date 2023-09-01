import { ServerError, UnauthorizedError } from './errors'
import { HttpResponse } from './http'

export const badRequest = (error: Error): HttpResponse => ({
  status: 400,
  body: error
})

export const forbidden = (error: Error): HttpResponse => ({
  status: 403,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  status: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
  status: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  status: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  status: 204,
  body: null
})
