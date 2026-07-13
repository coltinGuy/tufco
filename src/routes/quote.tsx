import { createFileRoute } from '@tanstack/react-router'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/quote')({
  component: Quote,
})

function Quote() {
  return (
    <>
      <NavBar />
      <section className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-4xl font-bold text-center mb-3">Get a Free Quote</h1>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
          Tell us about your project below and we&rsquo;ll get back to you with a free, no-obligation quote.
          Include your name, phone, email, address, project type, budget, desired completion date, and any
          photos of your yard.
        </p>
        <div className="rounded-2xl overflow-hidden border shadow">
          {/* Replace this src with your own Google Form's embed URL (Send > Embed <> in the Google Form editor). */}
          <iframe
            title="Free Quote Request Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSf_REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true"
            width="100%"
            height="1200"
            className="w-full"
          >
            Loading form…
          </iframe>
        </div>
        <p className="text-sm text-gray-400 mt-4 text-center">
          Prefer to talk instead? <a href="/contact" className="underline hover:text-green-700">Contact us directly</a>.
        </p>
      </section>
      <Footer />
    </>
  )
}
