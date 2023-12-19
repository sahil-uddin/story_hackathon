/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias['@'] = path.join(__dirname, 'app/src');
    return config;
  },
}

module.exports = nextConfig;
