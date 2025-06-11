const logos = [
  {
    name: 'Vercel',
    url: '/images/logo1.png'
  },
  {
    name: 'Nextjs',
    url: '/images/logo2.png',
  },
  {
    name: 'Prime',
    url: '/images/logo3.png',
  },
  {
    name: 'Trustpilot',
    url: '/images/logo4.png',
  },
  {
    name: 'Webflow',
    url: '/images/logo5.png',
  },
  {
    name: 'Airbnb',
    url: '/images/logo6.png',
  },
  {
    name: 'Tina',
    url: '/images/logo7.png',
  },
]

const Brand = () => {
  return (
    <div className="w-full pb-12 pt-4">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative flex gap-4 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-4"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-10 cursor-pointer w-auto px-2 object-contain filter grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                    alt={`${logo.name}`}
                    loading="eager"
                    draggable="false"
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Brand 