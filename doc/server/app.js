import express from 'express'
import log4js from "./lib/log.js"
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import router from './router/router'
import compression from 'compression'
import session from 'express-session'
import lessMiddleware from 'less-middleware'
const path = require('path')
let config = require('config')
const RedisStore = require('connect-redis')(session)

let app = express()
log4js.configure()

// 模板引擎
app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'jade')
app.use(log4js.useLog())

// favicon 图标
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// 日志
//app.use(logger('dev'))
// gzip see https://www.npmjs.com/package/compression
app.use(compression())
// bodyParser and cookieParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// 安全
app.use(helmet())
// 静态资源 less 编译
app.use(lessMiddleware(__dirname + '/public'));
app.use('/', express.static(path.join(__dirname, 'public')))

//session 处理
app.use(session({
  store: new RedisStore(config.get('db')),
  secret: 'abc123!!'
}));
app.use((req, res, next) => {
  if (!req.session) {
    return next(new Error('无法从 redis 拿到 session'));
  }
  next()
})
// 路由
app.use('/', router)
/* 404 && 5xx*/
app.use((req, res, next) => {
  res.status(404)
  if (req.accepts('html')) {
    res.render('404', { url: req.url })
  }
  req.accepts('json') && res.send({ error: 'Not found' })
})
app.use((err, req, res, next) => {
  var log = log4js.logger("error");
  err.status = err.status || 500
  res.status(err.status)
  res.render('error', { error: err })
  
})

/* 404 && 5xx*/
app.use((req, res, next) => {
  res.status(404)
  if (req.accepts('html')) {
    res.render('404', { url: req.url })
    return
  }
  req.accepts('json') && res.send({ error: 'Not found' })
})
app.use((err, req, res, next) => {
  err.status = err.status || 500
  res.status(err.status)
  res.render('error', { error: err })
})

export default app