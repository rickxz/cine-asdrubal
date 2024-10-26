import { Skeleton } from '@/components/ui/skeleton'
import { MovieCard } from '../components/movie-card'
import { useDoesMovieExists } from '../hooks/use-does-movie-exists'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export function ViewMovie() {
  const { movie } = useDoesMovieExists()
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      {!movie ? (
        <>
          <Skeleton className="w-[300px] h-[40px] mb-8" />
          <div className="w-full max-w-[300px] space-y-6">
            <Skeleton className="w-full h-[450px]" />
          </div>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold mb-8">{movie?.name}</h1>
          <div className="w-full max-w-[300px] space-y-6">
            <MovieCard movie={movie} alwaysDisplayInfo />
            <Button variant="outline" onClick={() => navigate('/')}>Voltar</Button>
          </div>
        </>
      )}
    </div>
  )
}