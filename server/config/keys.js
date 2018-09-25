// keys.js - prod or dev logic

if (process.env.NODE_ENV === 'production') {
    // prod keys
    module.exports = require('./prod');
} else {
    // dev keys, export required keys
    module.exports = require('./dev');
}
863239152291-rj6ffa1t6m2l0vkh0q3rb31u47egn79h.apps.googleusercontent.com
GP4i1k3kK5zJS1tNVwcNLJW9