/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/matematica_basica/introducao',
        permanent: true,
      },

      {
        source: '/matematica_basica/',
        destination: '/matematica_basica/introducao',
        permanent: true,
      },
    ]
  },
}
