const handleShortMonthName = require('../purgecss-allowlist.ts').handleShortMonthName;

/**
 * Wraps the first three letters of a string in a `span` element to be able to
 * shorten it with CSS in certain situations.
 *
 * @param {(String)} str The date string
 * @return {String} The date string with the potentially `span`ified month name
 */
module.exports = str => {
  const arr = str.split(' ');
  const month = arr[arr.length - 2];

  if (month.length <= 3) {
    return str;
  }

  arr[arr.length - 2] = [
    month.substring(0, 3),
    `<span class="${handleShortMonthName}">`,
    month.substring(3, month.length),
    '</span>'
  ].join('');

  return arr.join(' ');
};
