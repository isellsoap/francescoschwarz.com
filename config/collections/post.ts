/**
 *  Blog posts type collections
 */
module.exports = collection => collection.getFilteredByGlob('**/posts/**/*.md').reverse();
