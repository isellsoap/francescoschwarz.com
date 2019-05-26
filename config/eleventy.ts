module.exports = function(eleventy) {
  // collections
  eleventy.addCollection('post', require('./collections/post.ts'));
  eleventy.addCollection('sitemap', require('./collections/sitemap.ts'));

  // filters
  eleventy.addFilter('hdify', require('./filters/hdify.ts'));
  eleventy.addFilter('jsonify', require('./filters/jsonify.ts'));
  eleventy.addFilter('markdownify', require('./filters/markdownify.ts'));
  eleventy.addFilter('permalink', require('./filters/permalink.ts'));
  eleventy.addFilter('handleShortMonthName', require('./filters/handleShortMonthName.ts'));

  // transforms
  eleventy.addTransform('minify', require('./transforms/minify.ts'));

  // liquid
  eleventy.setLiquidOptions(require('./liquid.ts'));

  // markdown
  eleventy.setLibrary('md', require('./markdown.ts'));

  // plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-inclusive-language'));
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // pass throughs
  eleventy.addPassthroughCopy('./src/images');

  return {
    templateFormats: ['md', 'liquid'],
    markdownTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist'
    }
  };
};
