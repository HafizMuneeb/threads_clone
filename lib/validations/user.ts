import * as z from 'zod';

export const userValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, {message: 'Minimum 3 characters required'}).max(30),
    username: z.string().min(3, {message: 'Minimum 3 characters required'}).max(30),
    bio: z.string().min(3, {message: 'Minimum 3 characters required'}).max(1000),

})