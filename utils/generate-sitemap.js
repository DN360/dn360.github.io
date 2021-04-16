const sitemap = require('nextjs-sitemap-generator');

// const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString();

sitemap({
  baseUrl: 'https://dn360.github.io',
  pagesDirectory: __dirname + '/../out',
  targetDirectory: 'out/',
  ignoredExtensions: ['js', 'map'],
  ignoredPaths: ['[fallback]'],
});
