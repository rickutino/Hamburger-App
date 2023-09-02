import { AppError } from "@shared/errors/AppError";

export interface Validation {
  validate: (input: any) => AppError
}