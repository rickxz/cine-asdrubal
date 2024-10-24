import { useQuery } from '@tanstack/react-query'
import { getMovieById } from '../services/movies-service'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function useDoesMovieExists() {
  const { id } = useParams()

  const navigate = useNavigate()

  const { data: movie, isLoading, isError } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieById(id ?? ''),
  })


  useEffect(() => {
    if (isError) {
      return navigate('/')
    }

    document.title = `${movie?.name} - Cine Asdrubal`
  }, [isLoading, movie])

  return { movie, isLoading }
}