var webpack = require("webpack")
var webpackDevServer = require("webpack-dev-server")
var path = require('path')
var config = require("./webpack.config.js")

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  contentBase: path.join(__dirname, './public'),
  hot: true
});
server.listen(8080);
