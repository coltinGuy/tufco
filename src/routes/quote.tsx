import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/quote')({
  component: Quote,
})

function Quote() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  return (
    <>
      <NavBar />

      <section className="max-w-3xl mx-auto px-5 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Get a Free Quote
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Tell us about your landscaping project and we'll get back to you with a free, no-obligation estimate.
        </p>

        {/* Hidden Netlify form */}
        <form name="quote" data-netlify="true" hidden>
          <input type="hidden" name="form-name" value="quote" />
          <input type="text" name="name" />
          <input type="text" name="phone" />
          <input type="email" name="email" />
          <input type="text" name="address" />
          <input type="text" name="service" />
          <textarea name="message"></textarea>
          <input type="file" name="photos" />
        </form>

        <form
          name="quote"
          method="POST"
          data-netlify="true"
          action="/thank-you"
          encType="multipart/form-data"
          className="bg-white rounded-2xl shadow-lg border p-8 space-y-6"
        >
          <input type="hidden" name="form-name" value="quote" />

          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Smith"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="(604) 555-1234"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@email.com"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Property Address
            </label>
            <input
              type="text"
              name="address"
              placeholder="123 Main Street"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Service Needed
            </label>

            <select
              name="service"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option>General Landscaping</option>
              <option>Fence Installation</option>
              <option>Fence Repair</option>
              <option>Paver Installation</option>
              <option>Retaining Wall</option>
              <option>Lawn Care</option>
              <option>Garden Design</option>
              <option>Mulching</option>
              <option>Pressure Washing</option>
              <option>Yard Cleanup</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Tell Us About Your Project
            </label>

            <textarea
              name="message"
              rows={6}
              placeholder="Describe the work you'd like completed..."
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label className="block font-semibold mb-3">
              Upload Photos (Optional)
            </label>

            <label
              htmlFor="photos"
              className="flex items-center justify-center w-full px-6 py-5 border-2 border-dashed border-green-600 rounded-xl cursor-pointer bg-green-50 hover:bg-green-100 transition"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">📷</div>

                <p className="font-semibold text-green-700 text-lg">
                  Click to Upload Photos
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  JPG, PNG or HEIC • Multiple photos allowed
                </p>
              </div>
            </label>

            <input
              id="photos"
              type="file"
              name="photos"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  setSelectedFiles(Array.from(e.target.files))
                }
              }}
            />

            {selectedFiles.length > 0 && (
              <div className="mt-4 rounded-xl border border-green-200 bg-green-50 p-4">
                <h3 className="font-semibold text-green-700 mb-3">
                  ✅ Uploaded Photos
                </h3>

                <div className="space-y-2">
                  {selectedFiles.map((file) => (
                    <div
                      key={file.name}
                      className="bg-white border rounded-lg px-3 py-2 flex justify-between items-center"
                    >
                      <span className="text-gray-700 truncate">
                        📷 {file.name}
                      </span>

                      <span className="text-xs text-green-700 font-semibold">
                        Ready
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
  <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition text-lg"
          >
            Submit Quote Request
          </button>

          <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
            <p className="font-semibold text-green-700 mb-2">
              What happens next?
            </p>

            <p className="text-sm text-gray-600">
              Once you submit your request, our team will review your project,
              look over any uploaded photos, and contact you as soon as possible
              with your free quote.
            </p>
          </div>

          <div className="text-center text-sm text-gray-500 pt-2">
            ✓ Free Estimates &nbsp;&nbsp;•&nbsp;&nbsp;
            ✓ Fully Insured &nbsp;&nbsp;•&nbsp;&nbsp;
            ✓ Serving the Greater Vancouver Area
          </div>

        </form>
      </section>

      <Footer />
    </>
  )
}        
