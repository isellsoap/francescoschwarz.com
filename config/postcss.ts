import * as autoprefixer from 'autoprefixer';
import * as postcssImport from 'postcss-import';
import * as tailwindcss from 'tailwindcss';

export default [postcssImport(), autoprefixer(), tailwindcss('./config/tailwindcss.ts')];
