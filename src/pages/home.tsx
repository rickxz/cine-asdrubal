import { useQuery } from '@tanstack/react-query'
import { getMovies } from '../services/movies-service'
import { MovieCard } from '../components/movie-card'
import { Skeleton } from '../components/ui/skeleton'

export function Home() {
  const { data: movies } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies,
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Filmes populares</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
      { !movies && (
        <>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-center sm:justify-normal">
            <div className="w-full max-w-[300px]">
              <Skeleton className="w-full h-[450px]" />
            </div>
          </div>
        ))}    
        </>
      )}
        {movies?.map((movie) => (
          <div key={movie.id} className="flex justify-center sm:justify-normal">
            <div className="w-full max-w-[300px]">
              <MovieCard movie={movie} href={`/movie/${movie.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}