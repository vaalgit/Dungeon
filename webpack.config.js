var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: {
    dungeon2_tools: "./frontend/main_tabs/main.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            "scss": "vue-style-loader!css-loader!sass-loader",
            "sass": "vue-style-loader!css-loader!sass-loader?indentedSyntax"
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      }
    ]
  },
  resolve: {
    alias: {
      "components": path.join(__dirname, "/src/components"),
      "services": path.join(__dirname, "/src/services"),
      "utils": path.join(__dirname, "/src/utils"),
      "modules": path.join(__dirname, "/web-modules"),
      "vue$": "vue/dist/vue.esm.js"
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: "#inline-sourcemap"
}
