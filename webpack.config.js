const path = require('path');

module.exports = [{
  entry: [
    './src/css/stylesConfig.css'
  ],
  output: {
    filename: 'styles.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
},
{
  entry: [
    './src/js/crearLeccionDist.js',
  ],
  output: {
    filename: 'crearLeccionDist.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      }
    ],
  },
},
{
  entry: [
    './src/js/realizarLeccionDist.js',
  ],
  output: {
    filename: 'realizarLeccionDist.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      }
    ],
  },
},
{
  entry: [
    './src/js/verLeccionDist.js',
  ],
  output: {
    filename: 'verLeccionDist.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      }
    ],
  },
}
];