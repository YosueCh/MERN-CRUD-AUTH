import { z } from 'zod';

export const registerSchema = z.object({
    username: z
    .string({
        required_error: "Username Requerido",
    }),
    email: z
    .string({
        required_error: "Email es requerido",
    })
    .email({
        message: "Email invalido",
    }),
    password: z
    .string({
        required_error: "Contraseña Requerida",
    })
    .min(6,{
        message: "La contraseña debe contener al menos 6 caracteres"
    }),
});

export const loginSchema = z.object({
     email: z
    .string({
        required_error: "Email es requerido",
    })
    .email({
        message: "Email invalido",
    }),
    password: z
    .string({
        required_error: "Contraseña requerida",
    })
    .min(6,{
        message: "La contraseña debe contener al menos 6 caracteres"
    }),
});