const baseUrl = 'http://blog.bengiw.com:3000'
const devRender = require('./dev-render')
module.exports = function (app, template, serverBundle) {
  app.use(function (req, res, next) {
    if (!serverBundle) {
      res.send('serverBundle is running.... please wait for refresh')
    } else {
      next()
    }
  })
  app.get('/', function (req, res, next) {
    const methods = serverBundle.query(baseUrl).then(reso => ({ home: {...reso.data, zt: 'server'} }))
    return devRender(methods, serverBundle, template, req, res)
  })
  app.get('/tags', function (req, res, next) {
    const methods = serverBundle.query(baseUrl).then(reso => ({ home: {...reso.data, zt: 'server'} }))
    return devRender(methods, serverBundle, template, req, res)
  })
  app.get('/article/:id', function (req, res, next) {
    const methods = serverBundle.fetchArticle(req.params.id, baseUrl).then(reso => ({ article: { [req.params.id]: {...reso.data, zt: 'server'} } }))
    return devRender(methods, serverBundle, template, req, res)
  })
  app.use(function (err, req, res, next) {
    res.send(`sorry~  ${err.message}`)
  })
}
