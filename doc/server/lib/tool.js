import util from 'util'
import qs from 'querystring'
import sa from 'superagent'
import bodyParser from 'body-parser'
import csrf from 'csurf'
import crypto from 'crypto'
const csrfProtection = csrf({ cookie: true })
const parseForm = bodyParser.urlencoded({ extended: false })

function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
}

const Cookie = {
  get: (req, name) => {
    var cookie = qs.parse(req.headers.cookie, ';', '=');
    return name ? cookie[name] : cookie;
  }
}

export {
  Cookie,
  csrfProtection,
  parseForm,
  md5,
  qs,
  sa
}