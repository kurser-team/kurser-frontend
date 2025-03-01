import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
