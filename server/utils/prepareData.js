const baseUrl = 'http://blog.bengiw.com:3000'
const devRender = require('./dev-render')
module.exports = function (app, template) {
  app.use(function (req, res, next) {
    if (!req.serverEntry) {
      res.send('serverEntry is running.... please wait for refresh')
    } else {
      next()
    }
  })
  app.get('/', function (req, res, next) {
    const methods = req.serverEntry.query(baseUrl).then(reso => ({ home: {...reso.data, zt: 'server'} }))
    return devRender(methods, req.serverEntry, template, req, res)
  })
  app.get('/tags', function (req, res, next) {
    const methods = req.serverEntry.query(baseUrl).then(reso => ({ home: {...reso.data, zt: 'server'} }))
    return devRender(methods, req.serverEntry, template, req, res)
  })
  app.get('/article/:id', function (req, res, next) {
    const methods = req.serverEntry.fetchArticle(req.params.id, baseUrl).then(reso => ({ article: { [req.params.id]: {...reso.data, zt: 'server'} } }))
    return devRender(methods, req.serverEntry, template, req, res)
  })
  app.use(function (err, req, res, next) {
    res.send(`sorry~  ${err.message}`)
  })
}
