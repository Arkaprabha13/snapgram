import { User } from "lucide-react"
import * as z from "zod"

const SignupValidation = z.object({
    name: z.string().min(2,{message:"Too short"}).max(50),
    username: z.string().min(2,{message:"Too Short"}).max(50),
    email: z.string().email(),
    password: z.string().min(8,{message:"Too short, must be at least 8 characters"}),

})

export { SignupValidation }