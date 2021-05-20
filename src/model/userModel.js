const connection = require('../config/mysql')

module.exports = {
  registerUser: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            user_id: result.insertedId,
            ...setData
          }
          delete newResult.password
          resolve(newResult)
        } else {
          console.log(error)
          reject(new Error(error))
        }
      })
    })
  },

  checkEmail: (userEmail) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM user WHERE email = ?',
        userEmail,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
