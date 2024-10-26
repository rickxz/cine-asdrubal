import { MovieForm } from '@/components/movie-form'
import { SearchMovie } from '@/components/search-movie'
import { useToast } from '@/hooks/use-toast'
import { MovieFormData } from '@/lib/types'
import { getMovieById, updateMovie } from '@/services/movies-service'
import { useNavigate } from 'react-router-dom'

export function UpdateMovie() {
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleSubmit = (id: string) => async (data: MovieFormData) => {
    const updated = await updateMovie(id, data)

    if (updated) {
      toast({
        title: 'Sucesso!',
        description: 'Filme atualizado com sucesso'
      })

      navigate('/')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Editar filme</h1>
        <SearchMovie onSearch={getMovieById}>
          {(movie) => (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Editar detalhes do filme</h2>
              <MovieForm
                defaultValues={movie}
                onSubmit={handleSubmit(movie.id)}
                submitLabel="Editar filme"
              />
            </div>
          )}
        </SearchMovie>
      </div>
    </div>
  )
}