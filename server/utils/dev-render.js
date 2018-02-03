const ReactDOMServer = require('react-dom/server')
const ejs = require('ejs')
const serialize = require('serialize-javascript') // 序列化JavaScript对象
const Helmet = require('react-helmet').default
const createMemoryHistory = require('history/createMemoryHistory').default
module.exports = function (requestMethods, bundle, template, req, res) {
  return new Promise((resolve, reject) => {
    const routerContext = {}
    console.log('url:', req.url)
    requestMethods.then(initialState => {
      const dva = bundle.create({history: createMemoryHistory(), initialState})
      const app = bundle.default(dva, routerContext, req.url)
      const content = ReactDOMServer.renderToString(app)
      if (routerContext.url) {
        res.status(302).setHeader('Location', routerContext.url)
        res.end()
        return
      }
      const helmet = Helmet.rewind()
      const html = ejs.render(template, {
        appString: content,
        initialState: serialize(initialState),
        meta: helmet.meta.toString(),
        title: helmet.title.toString(),
        style: helmet.style.toString(),
        link: helmet.link.toString()
      })
      res.send(html)
      resolve()
    }).catch(reject)
  })
}
