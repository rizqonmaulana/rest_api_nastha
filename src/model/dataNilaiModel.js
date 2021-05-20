const connection = require('../config/mysql')

module.exports = {
  postDataNilai: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO data_nilai SET ?', setData, (error, result) => {
        if (!error) {
          resolve(setData)
        } else {
          console.log(error)
          reject(new Error(error))
        }
      })
    })
  },
  updateDataNilai: (setData, nimMhs, idMK, idDosen) => {
    return new Promise((resolve, reject) => {
        connection.query(
          `UPDATE data_nilai SET ? WHERE nim = ? AND id_mata_kuliah = ? AND id_dosen = ?`,
          [setData, nimMhs, idMK, idDosen],
          (error, result) => {
              console.log(result)
            if (!error) {
              resolve(setData)
            } else {
              reject(new Error(error))
            }
          }
        )
    })
  },
  checkDataNilai: (nimMhs, idMK, idDosen) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM data_nilai WHERE nim = ? AND id_mata_kuliah = ? AND id_dosen = ?',
        [nimMhs, idMK, idDosen],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  deleteDataNilai: (nimMhs, idMK, idDosen) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM data_nilai WHERE nim = ? AND id_mata_kuliah = ? AND id_dosen = ?',
        [nimMhs, idMK, idDosen],
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getAllNilai: () => {
    return new Promise((resolve, reject) => {
        connection.query(
        'SELECT mahasiswa.nim, mahasiswa.nama, jurusan, year(curdate())-year(tanggal_lahir)as umur, dosen.nama as dosen, nama_mata_kuliah, nilai FROM mahasiswa, mata_kuliah, dosen, data_nilai WHERE mahasiswa.nim = data_nilai.nim AND mata_kuliah.id = data_nilai.id_mata_kuliah AND dosen.id = data_nilai.id_dosen',
        (error, result) => {
            !error ? resolve(result) : reject(new Error(error))
        }
        )
    })
  },
  getAvg: () => {
    return new Promise((resolve, reject) => {
        connection.query(
        'SELECT mahasiswa.nim, mahasiswa.nama, jurusan, AVG(nilai) as nilai_rata_rata FROM data_nilai, mahasiswa WHERE mahasiswa.nim = data_nilai.nim GROUP BY data_nilai.nim',
        (error, result) => {
            !error ? resolve(result) : reject(new Error(error))
        }
        )
    })
  },
  getAvgJurusan: () => {
    return new Promise((resolve, reject) => {
        connection.query(
        'SELECT jurusan, AVG(nilai) as nilai_rata_rata FROM data_nilai, mahasiswa WHERE mahasiswa.nim = data_nilai.nim GROUP BY jurusan',
        (error, result) => {
            !error ? resolve(result) : reject(new Error(error))
        }
        )
    })
  },
}