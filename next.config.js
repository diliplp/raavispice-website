/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // .co.uk → .com (www redirect handled by Vercel dashboard)
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
