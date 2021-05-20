const connection = require('../config/mysql')

module.exports = {
  checkIdDosen: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM dosen WHERE id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}