import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/quote')({
  component: Quote,
})

function Quote() {

  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [submitted, setSubmitted] = useState(false)

  const [fields, setFields] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'General Landscaping',
    message: '',
  })


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {

    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })

  }


  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()


    const emailBody = `
New TUFCO Landscaping Quote Request

Name:
${fields.name}

Phone:
${fields.phone}

Email:
${fields.email}

Address:
${fields.address}

Service Needed:
${fields.service}

Project Details:
${fields.message}


Photos:
Please attach photos of the project area before sending this email.
    `


    const gmailLink =
      `https://mail.google.com/mail/?view=cm&fs=1&to=tufcolandscaping@gmail.com&su=${encodeURIComponent(
        'New TUFCO Landscaping Quote Request'
      )}&body=${encodeURIComponent(emailBody)}`


    window.open(gmailLink, '_blank')


    setSubmitted(true)

  }


  return (
    <>
      <NavBar />

      <section className="max-w-3xl mx-auto px-5 py-16">

        <h1 className="text-4xl font-bold text-center mb-4">
          Get a Free Quote
        </h1>


        <p className="text-center text-gray-500 mb-10">
          Tell us about your landscaping project and we'll help bring your
          outdoor vision to life.
        </p>


        {submitted ? (

          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">

            <h2 className="text-2xl font-bold text-green-800 mb-3">
              Almost Done!
            </h2>

            <p className="text-gray-700">
              Your email draft has been opened. Please attach your project
              photos and press send. We’ll get back to you shortly with your
              free quote.
            </p>

          </div>


        ) : (

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg border p-8 space-y-6"
        >


          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              name="name"
              required
              value={fields.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>



          <div>
            <label className="block font-semibold mb-2">
              Phone Number
            </label>

            <input
              name="phone"
              required
              value={fields.phone}
              onChange={handleChange}
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
              value={fields.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>



          <div>
            <label className="block font-semibold mb-2">
              Property Address
            </label>

            <input
              name="address"
              value={fields.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>



          <div>
            <label className="block font-semibold mb-2">
              Service Needed
            </label>

            <select
              name="service"
              value={fields.service}
              onChange={handleChange}
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
              rows={5}
              value={fields.message}
              onChange={handleChange}
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
              className="block text-center cursor-pointer border-2 border-dashed border-green-600 rounded-xl p-6 bg-green-50 hover:bg-green-100"
            >

              <div className="text-4xl mb-2">
                📷
              </div>

              <p className="font-semibold text-green-700">
                Click to Upload Photos
              </p>

              <p className="text-sm text-gray-500">
                Photos will be attached manually in the email
              </p>

            </label>


            <input
              id="photos"
              type="file"
              multiple
              accept="image/*"
              className="hidden"

              onChange={(e)=>{

                if(e.target.files){
                  setSelectedFiles(Array.from(e.target.files))
                }

              }}
            />



            {selectedFiles.length > 0 && (

              <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">

                <h3 className="font-semibold text-green-700 mb-2">
                  ✅ Uploaded Photos
                </h3>


                {selectedFiles.map(file => (

                  <div
                    key={file.name}
                    className="bg-white rounded-lg px-3 py-2 mb-2 text-sm"
                  >
                    📷 {file.name}
                  </div>

                ))}

              </div>

            )}

          </div>



          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition"
          >
            Get Free Quote
          </button>



          <div className="text-center text-sm text-gray-500">
            ✓ Free Estimates • ✓ Fully Insured • ✓ Serving the Greater Vancouver Area
          </div>


        </form>

        )}

      </section>


      <Footer />

    </>
  )
}
