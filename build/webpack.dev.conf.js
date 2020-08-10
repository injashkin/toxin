const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, "../src"),
  assets: "assets/",
};

// Pages const for HtmlWebpackPlugin
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#html-dir-folder
// const PAGES_DIR = PATHS.src
const PAGES_DIR = `${PATHS.src}`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: `${PATHS.src}/index.js`,
  output: {
    pathinfo: true, //работает без этого
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: /node_modules/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` },
            },
          },
        ],
      },
      // SCSS
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: `./postcss.config.js` },
            },
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
          // Позволяет не прописывать variables.scss в файлах, где он используется
          {
            loader: "sass-resources-loader",
            options: {
              // Provide path to the file with resources
              resources: `${PATHS.src}/variables.scss`,
              // Or array of paths
              //resources: ['./path/to/vars.scss', './path/to/mixins.scss']
            },
          },
        ],
      } /* end SCSS */,
      // PUG
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      // Шрифты и изображения
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)$/,
        loader: "file-loader?name=[path][name].[ext]",
      },
    ] /* end rules */,
  },
  resolve: {
    alias: {
      "~": PATHS.src,
    },
  },
  // DEV config
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: 8081,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
    new webpack.ProgressPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, ".html")}`,
        })
    ),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index.html`,
      filename: "./index.html",
      inject: true,
    }),

    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/ui-kit/ui-kit.pug`,
      filename: "./ui-kit.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/colors-type/colors-type.pug`,
      filename: "./colors-type.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/headers-footers/headers-footers.pug`,
      filename: "./headers-footers.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/signin/signin.pug`,
      filename: "./signin.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/signup/signup.pug`,
      filename: "./signup.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/landing/landing.pug`,
      filename: "./landing.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/search-room/search-room.pug`,
      filename: "./search-room.html",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pages/room/room.pug`,
      filename: "./room.html",
      inject: true,
    }),
  ],
};
