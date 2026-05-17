/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect www to non-www (canonical domain)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.raavispice.com' }],
        destination: 'https://raavispice.com/:path*',
        permanent: true,
      },
      // Redirect .co.uk to .com
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'raavispice.co.uk' }],
        destination: 'https://raavispice.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.raavispice.co.uk' }],
        destination: 'https://raavispice.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
