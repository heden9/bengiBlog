const axios = require('axios')

const baseUrl = 'http://blog.bengiw.com:3000/api'

module.exports = function (req, res, next) {
  const path = req.path
  console.log('reqqqqq:', path)
  axios(`${baseUrl}${path}`, {
    method: req.method,
    headers: {
      'Content-type': 'application/json'
    },
    params: {
      ...req.query
    }
  })
    .then(resp => {
      if (resp.status === 200) {
        res.send(resp.data)
      } else {
        res.status(resp.status).send(resp.data)
      }
    })
}
