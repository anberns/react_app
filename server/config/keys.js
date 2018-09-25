// keys.js - prod or dev logic

if (process.env.NODE_ENV === 'production') {
    // prod keys
    module.exports = require('./prod');
} else {
    // dev keys, export required keys
    module.exports = require('./dev');
}