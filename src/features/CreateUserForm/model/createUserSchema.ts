import { z } from "zod";

export const createUserSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Имя должно содержать минимум 2 символа" })
    .max(50, { message: "Имя не должно превышать 50 символов" }),
  lastName: z
    .string()
    .min(2, { message: "Фамилия должна содержать минимум 2 символа" })
    .max(50, { message: "Фамилия не должна превышать 50 символов" }),
  email: z.string().email({ message: "Введите корректный email адрес" }),
});

export type CreateUserFormData = z.infer<typeof createUserSchema>;
