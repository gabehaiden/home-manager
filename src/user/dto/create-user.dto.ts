import { Home } from 'src/home/entities/home.entity'

export class CreateUserDTO {
  readonly name: string
  readonly email: string
  readonly birthDate: string
  readonly login: string
  readonly passwordHash: string
  readonly home: Home
}