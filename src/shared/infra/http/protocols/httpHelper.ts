import { AppError } from '@shared/errors/AppError'
import { HttpResponse } from './http'

export const badRequest = (error: AppError): HttpResponse => ({
  status: 400,
  body: error
})

export const forbidden = (error: AppError): HttpResponse => ({
  status: 403,
  body: error
})

export const ok = (data: any): HttpResponse => ({
  status: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  status: 204,
  body: null
})
