const connection = require('../config/mysql')

module.exports = {
  checkNim: (nim) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM mahasiswa WHERE nim = ?`,
        nim,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  }
}
