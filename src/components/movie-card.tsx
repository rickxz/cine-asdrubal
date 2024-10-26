import { Link } from 'react-router-dom'
import { MovieReturnType } from '../services/movies-service'
import { Card } from './ui/card'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

type MovieCardProps = {
  movie: MovieReturnType
  alwaysDisplayInfo?: boolean
}

export function MovieCard({ movie, alwaysDisplayInfo }: MovieCardProps) {
  const imageUrl = `https://picsum.photos/seed/${movie.id}/300/450`;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors w-full">
      <Link to={`/movie/${movie.id}`} className="block">
        <div className="aspect-[2/3] relative group">
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
              <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent border-t-4 rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={imageUrl}
            alt={movie.name}
            className={`object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 ${isImageLoaded ? 'block' : 'hidden'}`}
            onLoad={() => setIsImageLoaded(true)}
          />

          <div className={twMerge("absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity", alwaysDisplayInfo ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>
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