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
          Tell us about your landscaping project and we'll get back to you with
          a free, no-obligation estimate.
        </p>

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
              className="w-full border rounded-lg px-4 py-3"
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
              className="w-full border rounded-lg px-4 py-3"
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
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Property Address
            </label>
            <input
              type="text"
              name="address"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Service Needed
            </label>

            <select
              name="service"
              className="w-full border rounded-lg px-4 py-3"
            >
              <option>General Landscaping</option>
              <option>Fence Installation</option>
              <option>Fence Repair</option>
              <option>Paver Installation</option>
              <option>Retaining Wall</option>
              <option>Lawn Care</option>
              <option>Garden Design</option>
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
              placeholder="Describe what you would like done..."
              className="w-full border rounded-lg px-4 py-3"
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
                <div className="text-3xl mb-2">📷</div>
                <p className="font-semibold text-green-700">
                  Click to Upload Photos
                </p>
                <p className="text-sm text-gray-500">
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
              <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-semibold text-green-700 mb-2">
                  ✅ {selectedFiles.length} photo
                  {selectedFiles.length > 1 ? 's' : ''} selected
                </p>

                {selectedFiles.map((file) => (
                  <p
                    key={file.name}
                    className="text-sm text-gray-700"
                  >
                    📷 {file.name}
                  </p>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition"
          >
            Submit Quote Request
          </button>

        </form>
      </section>

      <Footer />
    </>
  )
}
