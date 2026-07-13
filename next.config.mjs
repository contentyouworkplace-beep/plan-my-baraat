/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/index.html",
        },
        {
          source: "/about",
          destination: "/about/index.html",
        },
        {
          source: "/contact",
          destination: "/contact/index.html",
        },
        {
          source: "/gallery",
          destination: "/gallery/index.html",
        },
        {
          source: "/testimonials",
          destination: "/testimonials/index.html",
        },
        {
          source: "/packages/:slug",
          destination: "/packages/:slug/index.html",
        },
        {
          source: "/baraat-management/:slug",
          destination: "/baraat-management/:slug/index.html",
        },
        {
          source: "/:slug((?!crm$|api$|_next$|_vercel$|.*\\..*).+)",
          destination: "/:slug/index.html",
        },
      ],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-**",
      },
    ],
  },
};

export default nextConfig;
