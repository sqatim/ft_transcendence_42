/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
};

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}
// module.exports = nextConfig;
