import { Link } from 'react-router-dom'
import { Movie } from '../services/movies-service'
import { Card } from './ui/card'

type MovieCardProps = {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const imageUrl = `https://picsum.photos/seed/${movie.id}/300/450`;

  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors w-full">
      <Link to={`/movie/${movie.id}`} className="block">
        <div className="aspect-[2/3] relative group">
          <img src={imageUrl} alt={movie.name} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="font-bold line-clamp-2">{movie.name}</h3>
              <p className="text-sm text-gray-300">{movie.year}</p>
              <p className="text-sm text-gray-400">{movie.genre}</p>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  )
}