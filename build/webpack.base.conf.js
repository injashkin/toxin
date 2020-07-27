const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Main const
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#main-const
const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  assets: "assets/",
  outPathFonts: "fonts/",
  outPathImg: "img/",
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
  entry: {
    app: PATHS.src,
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: "/",
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
      // PUG
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true, //расставляет отступы и переносы строк в html коде
        },
      },
      // JS
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      // Шрифты
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: `${PATHS.outPathFonts}`,
        },
      },
      // Изображения
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: `${PATHS.outPathImg}`,
        },
      },
      // Отделяет шрифты svg из каталога src/theme/fonts/ от других изображений svg НЕ СМОГ НАСТРОИТЬ
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          //outputPath: "fonts2",
          /*
          outputPath: (url, resourcePath, context) => {
            // `resourcePath` - это оригинальный абсолютный путь к асету
            // `context` - это каталог, где хранится асет (`rootContext`) или опция `context`

            // Чтобы получить относительный путь, вы можете использовать
            // const relativePath = path.relative(context, resourcePath);

            //if (/fonts\.svg/.test(resourcePath)) {
            //  return `image_output_path/${url}`;
            //}

            if (/fonts/.test(context)) {
              return `fonts/${url}`;
            }

            return `img/${url}`;
          },
          */
        },
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
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      } /* end SCSS */,
    ] /* end rules */,
  },
  resolve: {
    alias: {
      "~": PATHS.src,
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
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
  ],
};
