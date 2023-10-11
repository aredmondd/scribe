const path = require("path")

module.exports = {
    mode: 'development', //mode: development/product
    entry: './javascript/index.js', //entry file we need to specify: where webpack should look for JS
    output: { //object
        path: path.resolve(__dirname, 'javascript'), //path of output file
        filename: 'bundle.js' //file name
    },
    watch: true //when webpack is ran, file will be watched, every time there is a change, bundle up code.
}