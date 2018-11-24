const markdown = require('../markdown.ts').markdown;

/**
 * Convert a string of text to Markdown
 * https://medium.com/confrere/e735c3f2f45e
 *
 * @param {String} str Markdown
 * @param {String} value If 'inline', HTML rendered without paragraph tags
 * @return {String} HTML
 *
 */
module.exports = (str, value) => {
  if (value === 'inline') {
    return markdown.renderInline(str);
  }

  return markdown.render(str);
};
