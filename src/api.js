const fetch = require('node-fetch')

const data = {
  email: 'crdgom@gmail.com',
  password: 'a'
}

fetch('https://us-east-1.aws.data.mongodb-api.com/app/ecommerce-gaeig/endpoint/user/login', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
