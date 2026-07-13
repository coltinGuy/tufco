import { Link } from '@tanstack/react-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/quote', label: 'Get a Free Quote' },
  { to: '/contact', label: 'Contact' },
]

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-green-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="text-xl font-bold tracking-tight">
          TUFCO Landscaping
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-green-300 transition-colors [&.active]:text-green-300"
              activeOptions={{ exact: link.to === '/' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
