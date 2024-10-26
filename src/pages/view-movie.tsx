import { Skeleton } from '@/components/ui/skeleton'
import { MovieCard } from '../components/movie-card'
import { useDoesMovieExists } from '../hooks/use-does-movie-exists'

export function ViewMovie() {
  const { movie, isFetching } = useDoesMovieExists()

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      {isFetching && <Skeleton className="w-[300px] h-[40px]" />}
      <h1 className="text-4xl font-bold mb-8">{movie?.name}</h1>
      <div className="w-full max-w-[300px]">
        {isFetching && <Skeleton className="w-full h-[450px]" />}
        { movie && <MovieCard movie={movie} alwaysDisplayInfo /> }
      </div>
    </div>
  )
}