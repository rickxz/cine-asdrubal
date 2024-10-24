import { Film, X, Menu } from 'lucide-react'
import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { cn } from '../lib/utils'
import { Button } from './ui/button'

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const links = [
    { href: '/', label: 'Início' },
    { href: '/create', label: 'Adicionar' },
    { href: '/update', label: 'Editar' },
    { href: '/delete', label: 'Remover' },
  ];

  return (
    <header className="bg-black/95 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-red-600">
            <Film className="h-6 w-6" />
            <span className="font-bold text-lg">Cine Asdrubal</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-red-600",
                  location.pathname === href
                    ? "text-red-600"
                    : "text-gray-400"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>


          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-400" />
            ) : (
              <Menu className="h-6 w-6 text-gray-400" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-2">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-red-600 py-2",
                    location.pathname === href
                      ? "text-red-600"
                      : "text-gray-400"
                  )}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}