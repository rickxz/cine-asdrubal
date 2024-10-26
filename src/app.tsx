import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { Home } from './pages/home'
import { ViewMovie } from './pages/view-movie'
import { CreateMovie } from './pages/create-movie'
import { Toaster } from './components/ui/toaster'
import { UpdateMovie } from './pages/update-movie'
import { DeleteMovie } from './pages/delete-movie'

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<ViewMovie />} />
            <Route path="/create" element={<CreateMovie />} />
            <Route path="/update" element={<UpdateMovie />} /> 
            <Route path="/delete" element={<DeleteMovie />} /> 
          </Routes>
        </main>

        <Toaster />
      </div>
    </BrowserRouter>
  )
}