import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function Contact() {
  const [fields, setFields] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('submitted')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <NavBar />
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h1 className="text-4xl font-bold text-center mb-3">Contact Us</h1>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Have a question or want to talk through your project? Reach out any of the ways below.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-green-700" size={22} />
                <a href="tel:+13062310241" className="hover:underline">(306) 231-0241</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-green-700" size={22} />
                <a href="mailto:tufcolandscaping@gmail.com" className="hover:underline">
                  tufcolandscaping@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-green-700" size={22} />
                <span>Serving the Greater Metro Vancouver Area </span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border shadow h-80">
              <iframe
                title="Service area map"
                src="https://www.google.com/maps?q=Greater+Metro+Vancouver+Area&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          <div className="rounded-2xl border p-8 bg-green-50/50">
            {status === 'submitted' ? (
              <p className="text-lg text-green-800 font-semibold">
                Thanks for reaching out! We&rsquo;ll get back to you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={fields.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={fields.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={fields.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={fields.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-green-700 hover:bg-green-600 transition-colors text-white font-semibold px-6 py-3 rounded-full disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
