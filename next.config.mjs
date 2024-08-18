import withPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = withPwa({
  dest: 'public',
  swSrc: '/public/custom-service-worker.js',
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/, /app-build-manifest.json$/],
  disable: process.env.NODE_ENV === 'development',
  reactStrictMode: true,
});

export default nextConfig;