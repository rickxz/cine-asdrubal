import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { Home } from './pages/home'
import { ViewMovie } from './pages/view-movie'

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<ViewMovie />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}