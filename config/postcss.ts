import * as autoprefixer from 'autoprefixer';
import * as postcssCustomMedia from 'postcss-custom-media';
import * as postcssCustomProperties from 'postcss-custom-properties';
import * as postcssImport from 'postcss-import';
import * as postcssMixins from 'postcss-mixins';

export default [
  postcssImport(),
  postcssMixins(),
  autoprefixer(),
  postcssCustomProperties({ preserve: false }),
  postcssCustomMedia()
];
