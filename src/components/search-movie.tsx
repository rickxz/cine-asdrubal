import { MovieReturnType } from '@/services/movies-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { ReactNode, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { LoaderCircle } from 'lucide-react'
import axios from 'axios'
import { MovieCard } from './movie-card'

const searchSchema = z.object({
  id: z.string().min(1, 'ID é obrigatório')
})

type SearchMovieFormData = z.infer<typeof searchSchema>

type SearchMovieProps = {
  onSearch: (id: string) => Promise<MovieReturnType>
  children?: (movie: MovieReturnType) => ReactNode
}

export function SearchMovie({ onSearch, children }: SearchMovieProps) {
  const [movie, setMovie] = useState<MovieReturnType | null>(null)

  const form = useForm<SearchMovieFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      id: ''
    }
  })

  async function handleSearch(data: SearchMovieFormData) {
    try {
      const result = await onSearch(data.id)
      setMovie(result)
      form.clearErrors()
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        form.setError('id', {
          type: 'manual',
          message: 'Filme não encontrado.'
        })
    
        setMovie(null)
      }
    }
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSearch)} className="space-y-4">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      {...field}
                      placeholder="Digite o ID do filme"
                      className="w-full sm:max-w-xs" 
                    />

                    <Button type="submit" className="w-full sm:w-auto flex gap-2" disabled={form.formState.isSubmitting}>
                      Buscar
                      { form.formState.isSubmitting && <LoaderCircle className="h-5 w-5 animate-spin" /> }
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      { movie && (
        <div className="space-y-4">
          <div className="w-full max-w-xs mx-auto sm:mx-0">
            <MovieCard movie={movie} />
          </div>
          {children?.(movie)}
        </div>
      )}
    </div>
  )
}