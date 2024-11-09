## Axios & Fetch

Axios and Fetch are two popular methods for making HTTP requests in JavaScript applications.

### Fetch
- Built-in browser API
- Returns a Promise
- Requires two-step process to handle JSON data
- No automatic transformation of request/response data
- No built-in timeout mechanism
- Doesn't automatically catch network errors

### Axios
- External library that needs to be installed
- Returns a Promise
- Automatically transforms JSON data
- Built-in request/response interceptors
- Supports request timeouts
- Better error handling
- Works in both browser and Node.js

### Key Differences
1. **Syntax**: Axios has a simpler, more intuitive syntax
2. **Error Handling**: Axios catches more error cases automatically
3. **Data Transformation**: Axios automatically transforms data to/from JSON
4. **Browser Support**: Fetch needs polyfill for older browsers, Axios works everywhere

### Example Usage


// Fetch
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Axios
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
