/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            // Apertura total CORS para entorno de desarrollo
            source: '0.0.0.0',
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
