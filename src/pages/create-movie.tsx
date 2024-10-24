import { MovieForm } from '@/components/movie-form'
import { useToast } from '@/hooks/use-toast'
import { MovieFormData } from '@/lib/types'
import { createMovie } from '@/services/movies-service'
import { useNavigate } from 'react-router-dom'

export function CreateMovie() {
  const navigate = useNavigate()
  const { toast } = useToast()

  async function handleSubmit(data: MovieFormData) {
    await createMovie(data)
    toast({
      title: 'Sucesso!',
      description: 'Filme criado com sucesso'
    })

    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Criar um novo filme</h1>
        <MovieForm onSubmit={handleSubmit} submitLabel="Criar filme" />
      </div>
    </div>
  )
}