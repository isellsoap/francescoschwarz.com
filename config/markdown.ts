const permalink = require('./purgecss-allowlist.ts').permalink;

module.exports = (function() {
  const options = {
    html: true,
    breaks: true,
    typographer: true
  };

  const parser = require('markdown-it')(options);

  const plugins = [
    require('markdown-it-abbr'),
    [
      require('markdown-it-anchor'),
      {
        permalink: true,
        permalinkClass: permalink,
        permalinkSymbol: '#'
      }
    ],
    require('markdown-it-attrs'),
    require('markdown-it-deflist'),
    require('markdown-it-emph'),
    require('markdown-it-footnote'),
    require('markdown-it-table-of-contents')
  ];

  plugins.forEach(plugin => {
    if (Array.isArray(plugin)) {
      // allow array of options to be passed
      parser.use(...plugin);
    } else {
      parser.use(plugin);
    }
  });
  return parser;
})();
