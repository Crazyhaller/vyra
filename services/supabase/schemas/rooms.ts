import z from 'zod'

export const createRoomSchema = z.object({
  name: z.string().min(3).max(50).trim(),
  isPublic: z.boolean(),
})
