import { Button } from '@/components/ui/button'
import { Clapperboard, Film, Rewind } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Ícones animados */}
        <div className="flex justify-center gap-4 mb-8">
          <Film className="size-12 text-red-600 animate-[spin_4s_linear_infinite]" />
          <Clapperboard className="size-12 text-red-600 animate-[bounce_2s_ease-in-out_infinite]" />
          <Film className="size-12 text-red-600 animate-[spin_4s_linear_infinite_reverse]" />
        </div>

        {/* Mensagem de erro */}
        <div className="space-y-4">
          <h1 className="text-7xl sm:text-9xl font-bold text-red-600">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold">Fora de Cartaz</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Parece que este rolo de filme se perdeu no caminho. Vamos voltar para a programação principal?
          </p>
        </div>

        {/* Animação bobina filme */}
        <div className="flex justify-center gap-2 py-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="size-2 rounded-full bg-red-600"
                style={{
                  animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`
                }}
              />
            ))}
        </div>

        <Button asChild size="lg" className="gap-2">
          <Link to="/">
            <Rewind className="size-4" />
              Voltar para a página principal
          </Link>
        </Button>

        <style>
          {`
          @keyframes pulse {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
        </style>
      </div>
    </div>
  )
}