const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
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
  // BASE config
  externals: {
    paths: PATHS,
  },
  entry: `${PATHS.src}/index.js`,
  /*entry: {
    app: `${PATHS.src}/index.js`,
    // module: `${PATHS.src}/your-module.js`,
  },*/
  output: {
    filename: "[name]-[hash].js",
    path: PATHS.dist,
    publicPath: "./",
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
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
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
              //resources: `${PATHS.src}/variables.scss`,
              resources: [`${PATHS.src}/variables.scss`],

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
        options: {
          pretty: true, //расставляет отступы и переносы строк в html коде
        },
      },
      // Шрифты
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/, //(\?v=\d+\.\d+\.\d+)?
        //include: [
        //path.resolve(__dirname, "src/theme/fonts"),
        //path.resolve(__dirname, "node_modules"), //Непонятно зачем
        //],
        //use: {
        loader: "file-loader?name=./assets/fonts/[name].[ext]", //?name=./assets/fonts/[name].[ext]
        /*
        options: {
          name: "[name].[ext]",
          outputPath: "assets/fonts/",
        },
        */
      },
      // Изображения
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        //exclude: [path.resolve(__dirname, "src/theme/fonts")],
        //use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/img/",
        },
        //},
      },
    ] /* end rules */,
  },
  resolve: {
    alias: {
      "~": PATHS.src,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new CopyWebpackPlugin([
      {
        from: `${PATHS.src}/${PATHS.assets}img`,
        to: "assets/img", //`${PATHS.assets}img`,
      },

      {
        from: `${PATHS.src}/${PATHS.assets}fonts`,
        to: "assets/fonts", //`${PATHS.assets}fonts`,
      },
      { from: `${PATHS.src}/static`, to: "" },
    ]),

    // Automatic creation any html pages (Don't forget to RERUN dev server)
    // see more: https://github.com/vedees/webpack-template/blob/master/README.md#create-another-html-files
    // best way to create pages: https://github.com/vedees/webpack-template/blob/master/README.md#third-method-best
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
