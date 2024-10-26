import { SearchMovie } from '@/components/search-movie'
import { AlertDialog, AlertDialogTitle, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTrigger, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { deleteMovie, getMovieById } from '@/services/movies-service'
import { useNavigate } from 'react-router-dom'

export function DeleteMovie() {
  const navigate = useNavigate()
  const { toast } = useToast()

  async function handleDelete(id: string) {
    await deleteMovie(id)
    toast({
      title: 'Sucesso!',
      description: 'Filme excluído com sucesso'
    })

    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Excluir filme</h1>
        <SearchMovie onSearch={getMovieById}>
          {(movie) => (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full">
                  Excluir filme
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent className="sm:max-w-[425px]">
                <AlertDialogHeader>
                  <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Essa ação não pode ser desfeita. Isso irá deletar o filme{' '}
                    <span className="font-semibold">{movie.name}</span> permanentemente.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleDelete(movie.id)} className="bg-red-600 hover:bg-red-700">
                    Excluir
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </SearchMovie>
      </div>
    </div>
  )
}