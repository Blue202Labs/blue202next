/** @type {import('next').NextConfig} */
const nextConfig = {images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cms.blue202labs.com',
      pathname: '/media/**',
    },
  ],
},};

export default nextConfig;
