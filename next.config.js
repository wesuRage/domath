/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
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
