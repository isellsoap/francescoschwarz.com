/**
 * Removes (index).html from a string in production mode
 *
 * @param {String} str URL, i.e. /page/index.html
 * @return {String} Permalinkable URL, i.e. /page/
 *
 */
module.exports = str => {
  if (process.env.ELEVENTY_ENV === 'production') {
    return str.replace(/(?:index)?\.html/g, '/');
  }
  return str;
};
