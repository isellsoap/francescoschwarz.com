/**
 * Appends an `-hd` suffix to an image URI.
 *
 * @param {(String)} uri The image URI
 * @return {String} The hdified iamge URI
 */
module.exports = uri => uri.replace(/(\.[\w\d_-]+)$/i, '-hd$1');
