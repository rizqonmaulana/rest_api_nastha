const connection = require('../config/mysql')

module.exports = {
  checkIdKuliah: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM mata_kuliah WHERE id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}