import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-green-950 text-green-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="text-lg font-bold text-white mb-2">Evergreen Landscaping</div>
          <p className="text-sm text-green-300">
            Transforming outdoor spaces, one yard at a time.
          </p>
        </div>
        <div className="text-sm space-y-1">
          <div>Phone: (555) 123-4567</div>
          <div>Email: hello@evergreenlandscaping.example</div>
          <div>Service Area: Greater Metro Area &amp; Surrounding Counties</div>
        </div>
        <div className="text-sm space-y-1">
          <Link to="/quote" className="block hover:text-white">
            Get a Free Quote
          </Link>
          <Link to="/contact" className="block hover:text-white">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="text-center text-xs text-green-400 mt-8">
        © {new Date().getFullYear()} Evergreen Landscaping. All rights reserved.
      </div>
    </footer>
  )
}
