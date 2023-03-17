const axios = require('axios')
const data = JSON.stringify({
  collection: 'db',
  database: 'test',
  dataSource: 'AtlasCluster',
  projection: {
    _id: 1
  }
})

const config = {
  method: 'post',
  url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-ujzlw/endpoint/data/v1/action/findOne',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': 'SrK1zyOBcBOgPL661h5Dn3eotijFPBRCv7Cu31MFpeEiDctCXvGjfWKRw7D5a2iD',
    Accept: 'application/ejson'
  },
  data
}

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
