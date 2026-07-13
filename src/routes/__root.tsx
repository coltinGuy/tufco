import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TUFCO Landscaping | Outdoor Space Transformations',
      },
      {
        name: 'description',
        content:
          'Professional landscaping services including Lawn Care, Brick Laying, Paver Installation, Mulching, Fence Building, Planting & Garden Installation, Retaining Walls, Garden Design, Hedge Trimming, Seasonal Cleanup, and General Landscaping & Maintenance.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
