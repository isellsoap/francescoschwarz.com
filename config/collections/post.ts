/**
 *  Blog posts type collections
 *
 * TODO: Replace globs with tags once #147 is resolved
 * https://github.com/11ty/eleventy/issues/147
 */
module.exports = collection => collection.getFilteredByGlob('**/posts/**/*.md').reverse();
