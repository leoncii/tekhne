//Classes getters and setters
//STATIC: no esta ligado a la instancia de la clase sino a la clase en si
class Rectangle {
  set width(w) {
    this._width = w
  }

  get width() {
    return this._width
  }

  set height(h) {
    this._height = h
  }

  get height() {
    return this._height
  }
}

let r = new Rectangle()
console.log(r)
r.width = 100
r.height = 50

console.log(`${r.height}`)
console.log(`${r.height}`)

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: {
     home: path.resolve(__dirname, 'src/index.js'),
     about: path.resolve(__dirname, 'src/about.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundler.js',
  },
  devServer: {
    open: true,
    listen: 3333
  },
  module: {
      rules: [
        test: /\.js$/,
        use: [
            {
                loader: HtmlWebpackPlugin.loader
            },
            'style-loader'
        ]
      ]
  }
  plugins: [
    new HtmlWebpackPlugin({

    })
    new webpack.HotModuleReplacemtPlugin({})
  ]
}
