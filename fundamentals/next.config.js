/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: Read list of strict mode changes (https://react.dev/reference/react/StrictMode)
  reactStrictMode: true,
  eslint: {
    // TODO: Fix the lint errors
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
