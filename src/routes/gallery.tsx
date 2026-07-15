import { createFileRoute } from '@tanstack/react-router'

import { useState } from 'react'

import { NavBar } from '@/components/NavBar'

import { Footer } from '@/components/Footer'



export const Route = createFileRoute('/gallery')({

  component: Gallery,

})



const projects = [

  {

    name: 'Arbour',

    category: 'Custom Outdoor Structures',

    before: '/Arbour_before.jpeg',

    after: '/Arbour.jpeg',

  },

  {

    name: 'Fence Replacement',

    category: 'Fencing & Property Upgrades',

    before: '/Fence_Before.jpeg',

    after: '/Fence_After.jpeg',

  },

  {

    name: 'Overgrown Bed Refresh',

    category: 'Seasonal Cleanup',

    before: '/Overgrown_Before.JPG',

    after: '/Overgrown_After.jpeg',

  },

  {

    name: 'Sod Installation',

    category: 'Lawn Installation',

    before: '/Sod_Before.jpeg',

    after: '/Sod_After.jpeg',

  },

]

const additionalPhotos = [
  '/Backyard_full.jpeg',
  '/BenchPatio.jpeg',
  '/PaverPatiojpeg',
  '/Arbour.jpeg',
  '/Arbour2.jpeg',
  '/ArbourFin.jpeg',
  '/WEED.jpeg',
  '/SODStrip.jpeg',
  
]

function BeforeAfterSlider({ project }: { project: typeof projects[0] }) {

  const [position, setPosition] = useState(50)



  return (

    <div className="rounded-2xl overflow-hidden bg-white shadow border">

      <div className="relative aspect-[4/3] select-none">

        <img

          src={project.after}

          alt={`After photo of ${project.name}`}

          className="absolute inset-0 w-full h-full object-cover"

        />



        <div

          className="absolute inset-0 overflow-hidden"

          style={{ width: `${position}%` }}

        >

          <img

            src={project.before}

            alt={`Before photo of ${project.name}`}

            className="w-full h-full object-cover"

            style={{

              width: `${100 * (100 / position || 0)}%`,

              maxWidth: 'none',

            }}

          />

        </div>



        <div

          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"

          style={{ left: `${position}%` }}

        />



        <input

          type="range"

          min={0}

          max={100}

          value={position}

          onChange={(e) => setPosition(Number(e.target.value))}

          className="absolute inset-x-0 bottom-3 w-[90%] mx-auto left-0 right-0 accent-green-700"

          aria-label={`Before/after slider for ${project.name}`}

        />



        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">

          Before

        </span>



        <span className="absolute top-2 right-2 bg-green-700/90 text-white text-xs px-2 py-1 rounded">

          After

        </span>

      </div>



      <div className="p-4 font-semibold">{project.name}</div>

    </div>

  )

}



function Gallery() {

  return (

    <>

      <NavBar />



      <section className="max-w-7xl mx-auto px-5 py-16">

        <h1 className="text-4xl font-bold text-center mb-3">

          Project Gallery

        </h1>



        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">

          Drag the slider on each project to compare before and after results.

        </p>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div key={project.name}>

              <BeforeAfterSlider project={project} />



              <div className="text-sm text-gray-500 mt-2 px-1">

                {project.category}

              </div>

            </div>

          ))}

        </div>
        <PhotoCarousel />

      </section>



      <Footer />

    </>

  )

}

