const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),  // Ensure output goes to `dist/`
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve from `dist/`
    },
    historyApiFallback: true,
    port: 5500,
    open: true, // Auto-open browser
    hot: true,  // Enable hot-reloading
  },
};