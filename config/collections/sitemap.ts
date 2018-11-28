/**
 * Sitemap collection
 */
module.exports = collection =>
  collection.getFilteredByGlob('**/*.md').sort((a, b) => {
    const p1 = a.data.priority;
    const p2 = b.data.priority;
    const u1 = a.url;
    const u2 = b.url;

    if (p1 < p2) {
      return 1;
    }
    if (p1 > p2) {
      return -1;
    }
    if (u1 < u2) {
      return -1;
    }
    if (u1 > u2) {
      return 1;
    }
    return 0;
  });
