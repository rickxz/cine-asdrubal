import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import { Home } from './pages/home'

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}