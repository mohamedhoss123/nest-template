import { createZodDto } from 'nestjs-zod'
import { z } from 'nestjs-zod/z'

const CreateUesrSchema = z.object({
  username: z.string().describe('This is an username'),
  password: z.string().describe('This is an username'),
})

// class is required for using DTO as a type
export class CreateUesrDTO extends createZodDto(CreateUesrSchema) {}