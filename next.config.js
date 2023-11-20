/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, {}) => {
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.fallback = { fs: false };

    config.plugins.push(
      new NodePolyfillPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: './node_modules/onnxruntime-web/dist/ort-wasm.wasm',
            to: 'static/chunks/app/upload',
          },
          {
            from: './node_modules/onnxruntime-web/dist/ort-wasm-simd.wasm',
            to: 'static/chunks/app/upload',
          },
          {
            from: './model',
            to: 'static/chunks/pages',
          },
        ],
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
