var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var proxyMiddleware = require('http-proxy-middleware');

// configure proxy middleware context
var context = '/api';                     // requests with this path will be proxied

// configure proxy middleware options
var options = {
        target: 'http://127.0.0.1:3000', // target host
        changeOrigin: true,               // needed for virtual hosted sites
        ws: true,                         // proxy websockets
        // pathRewrite: {
        //     '^/old/api' : '/new/api'      // rewrite paths
        // },
        // proxyTable: {
        //     // when request.headers.host == 'dev.localhost:3000',
        //     // override target 'http://www.example.org' to 'http://localhost:8000'
        //     'dev.localhost:3000' : 'http://localhost:8000'
        // }
    };

// create the proxy
var proxy = proxyMiddleware(context, options);
var app = express()
app.use(proxy)
var compiler = webpack(config)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())
// serve webpack bundle output
app.use(devMiddleware)
// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)
// serve pure static assets
app.use('/static', express.static('./static'))

module.exports = app.listen(8080, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8080')
})
