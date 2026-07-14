import { createFileRoute, Link } from '@tanstack/react-router'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/thank-you')({
  component: ThankYou,
})

function ThankYou() {
  return (
    <>
      <NavBar />

      <section className="max-w-3xl mx-auto px-5 py-24 text-center">
        <div className="text-6xl mb-6">
          ✅
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Thank You!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Your quote request has been received. Our team will review your
          project details and get back to you shortly.
        </p>

        <Link
          to="/"
          className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full"
        >
          Back to Home
        </Link>
      </section>

      <Footer />
    </>
  )
}
