/* craco.config.js */
const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@': path.join(path.resolve(__dirname, './src')),
      '@public': path.join(path.resolve(__dirname, './public')),
      '@assets': path.join(path.resolve(__dirname, './src', 'assets')),
    }
  }

}
