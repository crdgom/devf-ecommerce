exports = async function (payload, response) {
  // Convert the request body from BSON to a JSON object and then pull out relevant fields
  const { someField } = JSON.parse(payload.body.text())
  // If the request is missing required fields or something else is wrong, respond with an error
  if (!someField) {
    response.setStatusCode(400)
    response.setBody('Could not find "someField" in the endpoint request body.')
  }
  // Execute application logic, such as working with MongoDB
  const cluster = context.services.get('mongodb-atlas')
  const requests = cluster.db('demo').collection('requests')
  try {
    const { insertedId } = await requests.insertOne({ someField })
    // Respond with an affirmative result
    response.setStatusCode(200)
    response.setBody(`Successfully created a document for the request with _id: ${insertedId}.`)
  } catch (err) {
    // If the insert fails for some reason, respond with an error
    response.setStatusCode(500)
    response.setBody(`Failed to create a document for the request. ${err}`)
  }
}

// Funciones

// * Funcion para listar usuarios en un endpoint de mongo

exports = function ({ query, headers, body }, response) {
  const result = context.services
    .get('mongodb-atlas')
    .db('ecommerce')
    .collection('users')
    .find({})
    .toArray()
    .then(users => {
      users.forEach(user => {
        delete user.password
      })
      return users
    })
  return result
}

// * Funcion para listar un usuario por id en un endpoint de mongo pasando el id por parametro en la url y borrando el password

exports = function ({ query, headers, body }, response) {
  const { id } = query
  const result = context.services
    .get('mongodb-atlas')
    .db('ecommerce')
    .collection('users')
    .find({ _id: BSON.ObjectId(id) })
    .toArray()
    .then(users => {
      users.forEach(user => {
        delete user.password
      })
      return users
    })
  return result
}

// * Funcion para devolver datos del usuario logueado basado en el email y borrar tosos los datos dejando solo el password y el email












// Funcion para devolver datos del usuario logueado
exports function = ({ query, headers, body }, response){
  const {email} = query
  const result = context.services
    .get('mongodb-atlas')
    .db('ecommerce')
    .collection('users')
    .findOne({ email: email })
    .toArray()
    .then(users => {
      users.forEach(user =>{
        delete user.first_name
        delete user.last_name
        delete user.gender
        delete user.role
        delete user.updated_by
        delete user.created_by
        delete user.created_at
        delete user.updated_at
      })
      return user
    })
  return result
}


// * Funcion para listar productos en un endpoint de mongo

exports = function ({ query, headers, body }, response) {
  const result = context.services
    .get('mongodb-atlas')
    .db('ecommerce')
    .collection('products')
    .find({})
    .toArray()
  return result
}

// * Funcion para listar un producto por id en un endpoint de mongo pasando el id por parametro en la url

exports = function ({ query, headers, body }, response) {
  const { id } = query
  const result = context.services
    .get('mongodb-atlas')
    .db('ecommerce')
    .collection('products')
    .find({ _id: BSON.ObjectId(id) })
    .toArray()
  return result
}

// * Funcion para registrar un usuario en el endpoint /register de mongo con el rol por defecto de CUSTOMER si no se indica otra cosa juntando todo con json parse

exports = function ({ query, headers, body }, response) {
  const { first_name, last_name, gender, email, password, role } = JSON.parse(body.text())
  const result = context.services
    .get('mongodb-atlas')
    .db('ecommerce')
    .collection('users')
    .insertOne({
      first_name,
      last_name,
      gender,
      email,
      password,
      role: role || 'CUSTOMER',
      created_at: new Date(),
      updated_at: new Date()
    })
    .then(result => {
      return { success: true, message: 'User created successfully' }
    }
    )
  return result
}

// * funcion para crear un producto en el endpoint /products/add de mongo

exports = function ({ query, headers, body }, response) {
  const { isActive, product_name, description, price, category, brand, sku, __v, image, created_by } = JSON.parse(body.text())
  const result = context.services
    .get('mongodb-atlas')
    .db('ecommerce')
    .collection('users')
    .insertOne({
      isActive,
      product_name,
      description,
      price,
      category,
      brand,
      sku,
      __v,
      image,
      created_by,
      created_at: new Date(),
      updated_at: new Date()
    })
    .then(result => {
      return { success: true, message: 'User created successfully' }
    }
    )
  return result
}

// * Funcion para actualizar un producto en el endpoint /products/update de mongo

exports = function ({ query, headers, body }, response) {
  const { id, isActive, product_name, description, price, category, brand, sku, __v, image, created_by } = JSON.parse(body.text())
  const result = context.services
    .get('mongodb-atlas')
    .db('ecommerce')
    .collection('products')
    .updateOne(
      { _id: BSON.ObjectId(id) },
      {
        $set: {
          isActive,
          product_name,
          description,
          price,
          category,
          brand,
          sku,
          __v,
          image,
          created_by,
          updated_at: new Date()
        }
      }
    )
    .then(result => {
      return { success: true, message: 'Product updated successfully' }
    }
    )
  return result
}
