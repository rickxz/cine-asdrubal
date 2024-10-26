import { z } from 'zod'

export const movieSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Título é obrigatório'),
  genre: z.string().min(1, 'Gênero é obrigatório'),
  year: z.number({invalid_type_error: 'Ano de lançamento deve ser um número'})
    .min(1888, 'Ano de lançamento deve ser maior ou igual a 1888')
    .max(new Date().getFullYear() + 5, 'Ano de lançamento não pode estar muito distante no futuro'),
});

export type Movie = z.infer<typeof movieSchema>;

export const movieFormSchema = movieSchema.omit({ id: true });
export type MovieFormData = z.infer<typeof movieFormSchema>;