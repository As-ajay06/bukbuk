
import { z } from "zod"

export const UserSchema = z.object({
    name: z.string(),
    password: z.string(),
    email: z.email()
})

export const signinUserSchema = z.object({
    name: z.string(),
    password: z.string()
})

export const createRoomSchema = z.object({
    name: z.string()
})