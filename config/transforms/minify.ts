const htmlmin = require('html-minifier');

/**
 * Minify HTML output.
 *
 * @param {String} content Rendered content
 * @param {String} outputPath Path to rendered file
 * @return {String} Minified HTML
 *
 */
module.exports = (content, outputPath) => {
  if (outputPath && outputPath.endsWith('.html')) {
    const minified = htmlmin.minify(content, {
      collapseWhitespace: true,
      conservativeCollapse: true,
      removeComments: true
    });
    return minified;
  }

  return content;
};
