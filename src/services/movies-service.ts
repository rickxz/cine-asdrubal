import { api } from '../lib/axios'

export type Movie = {
  id: string
  name: string
  genre: string
  year: string
}

export async function getMovies(): Promise<Movie[]> {
  const response = await api.get('/movies')
  return response.data
}

export async function getMovieById(id: string): Promise<Movie> {
  const response = await api.get(`/movies/${id}`)
  return response.data
}