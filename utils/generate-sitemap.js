const sitemap = require('nextjs-sitemap-generator');

// const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString();

sitemap({
  baseUrl: 'https://www.mbsoftware.tokyo',
  pagesDirectory: __dirname + '/../out',
  targetDirectory: 'out/',
  ignoredExtensions: ['js', 'map'],
  ignoredPaths: ['[fallback]'],
});
