import { MovieFormData } from '@/lib/types'
import { api } from '../lib/axios'

export type MovieReturnType = {
  id: string
  name: string
  genre: string
  year: number
}

export async function getMovies(): Promise<MovieReturnType[]> {
  const response = await api.get<MovieReturnType[]>('/movies')
  return response.data
}

export async function getMovieById(id: string): Promise<MovieReturnType> {
  const response = await api.get<MovieReturnType>(`/movies/${id}`)
  return response.data
}

export async function createMovie(movie: MovieFormData): Promise<MovieReturnType> {
  const response = await api.post<MovieReturnType>('/movies', movie)
  return response.data
}

export async function updateMovie(id: string, movie: MovieFormData): Promise<MovieReturnType> {
  const response = await api.put<MovieReturnType>(`/movies/${id}`, movie)
  return response.data
}