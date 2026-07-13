import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Construction,
  Hammer,
  Scissors,
  Leaf,
  TreePine,
  Sprout,
  Trees,
  Droplets,
  Phone,
} from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: Home,
})

const services = [
  { icon: Hammer, name: 'Brick Laying', description: 'Precision installation of brick features including walkways, patios, edging, retaining walls and structural elements.' },
  { icon: Construction, name: 'Paver Installation', description: 'Custom patios, driveways, and pathways using high-quality pavers designed for durability and visual appeal.' },
  { icon: Hammer, name: 'Fence Building', description: 'Proffesional constructiom of wood and composite fences for privacy, security, and property definition.' },
  { icon: Sprout, name: 'Lawn Care', description: 'Mowing, edging, sod instillation, seeding and fertilization to keep your lawn thick and green.' },
  { icon: Leaf, name: 'Mulching', description: 'Fresh mulch beds that lock in moisture and boost curb appeal.' },
  { icon: TreePine, name: 'Garden Design', description: 'Custom planting plans tailored to your space and style.' },
  { icon: Scissors, name: 'Hedge Trimming', description: 'Clean, precise shaping for hedges, shrubs, and topiary.' },
  { icon: Trees, name: 'Seasonal Cleanup', description: 'Leaf, removal and bed prep for every season of the year.' },
  { icon: Droplets, name: 'Pressure Washing', description: 'Driveways, patios, and siding restored to like-new condition.' },
]

const beforeAfter = [
  { project: 'Backyard Patio Refresh' },
  { project: 'Front Yard Full Redesign' },
  { project: 'Overgrown Lot Cleanup' },
]

const reviews = [
  {
    name: 'Sarah M.',
    quote: 'They transformed our backyard into something out of a magazine. Professional, on time, and the results speak for themselves.',
  },
  {
    name: 'James T.',
    quote: 'Best lawn care crew we’ve had in years. Consistent, reliable, and our grass has never looked better.',
  },
  {
    name: 'Priya K.',
    quote: 'The garden design they created exceeded our expectations. Worth every penny.',
  },
]

function Home() {
  return (
    <>
      <NavBar />

      <section className="relative">
        <div className="relative h-[75vh] min-h-[480px] w-full overflow-hidden">
          <img
            src="/placeholder.png"
            alt="A beautifully landscaped backyard with lush lawn, garden beds, and a stone patio"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          <div className="relative z-10 h-full max-w-7xl mx-auto px-5 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
              Transform Your Outdoor Space
            </h1>
            <p className="mt-4 max-w-xl text-lg text-green-50">
              Expert landscaping services that turn ordinary yards into extraordinary spaces.
            </p>
            <Link
              to="/quote"
              className="mt-8 inline-block bg-green-600 hover:bg-green-500 transition-colors text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold text-center mb-3">Our Services</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          From routine maintenance to full-scale transformations, we handle every part of your outdoor space.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-green-100 bg-green-50/50 p-6 hover:shadow-lg transition-shadow"
            >
              <service.icon className="text-green-700 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-center mb-3">Before &amp; After</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            See the real difference our crews make. Explore the full gallery for more transformations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map((item) => (
              <div key={item.project} className="rounded-2xl overflow-hidden bg-white shadow">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src="/placeholder.png" alt={`Before photo of ${item.project}`} className="w-full aspect-square object-cover" />
                    <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</span>
                  </div>
                  <div className="relative">
                    <img src="/placeholder.png" alt={`After photo of ${item.project}`} className="w-full aspect-square object-cover" />
                    <span className="absolute top-2 left-2 bg-green-700/90 text-white text-xs px-2 py-1 rounded">After</span>
                  </div>
                </div>
                <div className="p-4 font-semibold">{item.project}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-colors font-semibold px-6 py-3 rounded-full"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-2xl border p-6 bg-white shadow-sm">
              <p className="text-gray-700 italic leading-relaxed mb-4">&ldquo;{review.quote}&rdquo;</p>
              <div className="font-semibold text-green-800">{review.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-green-700 text-white py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Yard?</h2>
          <p className="mb-8 text-green-100">
            Reach out today and let&rsquo;s start planning your outdoor space.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-800 hover:bg-green-100 transition-colors font-semibold px-8 py-4 rounded-full text-lg"
          >
            <Phone size={20} />
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
