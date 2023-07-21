const url = require('url');

function resolveURL(baseURL, relativePath) {
  const absoluteURL = new URL(relativePath, baseURL).href;
  console.log('Absolute URL:', absoluteURL);
}

// Example usage
const baseURL = 'https://example.com';
const relativePath = '/subfolder/page.html';

resolveURL(baseURL, relativePath);
