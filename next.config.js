/** @type {import('next').NextConfig} */
const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({
  // path: '.env',
  public: [
    "NEXT_PUBLIC_AWS_ACCESS_KEY_ID",
    "NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY",
    "NEXT_PUBLIC_AWS_SESSION_TOKEN",
  ],
});

module.exports = withConfig({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
});
