/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            // Apertura total CORS para entorno de desarrollo
            source:  ` ${process.env.NEXT_PUBLIC_VERCEL_URL}`,
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: '*',
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
