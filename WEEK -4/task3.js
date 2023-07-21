const querystring = require('querystring');
function extractQueryParams(url) {
  const queryString = url.split('?')[1];
  const queryParams = querystring.parse(queryString);
  console.log('Query Parameters:', queryParams);
}
// Example usage
const url = 'https://example.com/search?q=hello&lang=en&page=1';
extractQueryParams(url);
