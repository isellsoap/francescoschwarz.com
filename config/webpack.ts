import * as glob from 'glob';
import * as path from 'path';
import * as webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import * as OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import postcssPlugins from './postcss';

const rules = {
  fonts: {
    test: /\.woff2$/,
    use: 'file-loader?name=fonts/[name].[hash].[ext]'
  },
  ts: {
    test: /\.ts$/,
    exclude: /node_modules/,
    use: 'ts-loader'
  },
  styles: {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: postcssPlugins
        }
      }
    ]
  }
};

export default (env, argv) => {
  let config: webpack.Configuration = {
    mode: argv.mode,
    entry: { 'scripts/main': './src/assets/scripts/main.ts', 'scripts/lazysizes': './src/assets/scripts/lazysizes.ts' },
    output: {
      path: path.resolve(__dirname, '..', 'dist', 'assets'),
      filename: '[name].[chunkhash].js',
      // Among other things this ensures correct path outputs for hashed assets
      // (CSS and JS files) which get inserted into the `.ejs` templates via the
      // `html-webpack-plugin`.
      publicPath: '/assets/'
    },
    module: {
      rules: [rules.fonts, rules.ts, rules.styles]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'styles/main.[contenthash].css'
      }),

      ...glob.sync('./src/assets/ejs/*.liquid.ejs').map(
        page =>
          new HtmlWebpackPlugin({
            inject: false,
            template: page,
            filename: `../../src/_includes/hashed-assets/${path.basename(page, '.ejs')}`
          })
      )
    ]
  };

  if (argv.mode === 'production') {
    config = Object.assign(config, {
      optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
      }
    });
  }

  return config;
};
