const {
    postDataNilai,
    updateDataNilai,
    checkDataNilai,
    deleteDataNilai,
    getAllNilai,
    getAvg,
    getAvgJurusan
} = require('../model/dataNilaiModel')

const { checkNim } = require('../model/mahasiswaModel')
const { checkIdKuliah } = require('../model/mataKuliahModel')
const { checkIdDosen } = require('../model/dosenModel')

const helper = require('../helper/response')

module.exports = {
    postNilai: async (request, response) => {
        try {
          const {
            nim,
            id_mata_kuliah,
            id_dosen,
            nilai,
            keterangan
          } = request.body

          const checkNimMahasiswa = await checkNim(nim)
          if(checkNimMahasiswa.length < 1) {
            return helper.response(
                response,
                400,
                'NIM not found'
              )
          }

          const checkIdMataKuliah = await checkIdKuliah(id_mata_kuliah)
          if(checkIdMataKuliah.length < 1) {
            return helper.response(
                response,
                400,
                'id_mata_kuliah not found'
              )
          }

          const checkDosen = await checkIdDosen(id_dosen)
          if(checkDosen.length < 1) {
            return helper.response(
                response,
                400,
                'id_dosen not found'
              )
          }
    
          const setData = {
            nim,
            id_mata_kuliah,
            id_dosen,
            nilai,
            keterangan
          }
          console.log(setData)
          const result = await postDataNilai(setData)
          return helper.response(response, 200, 'Success Post Data Nilai', result)
        } catch (error) {
            console.log(error)
          return helper.response(response, 400, 'Bad Request', error)
        }
      },

      updateNilai: async (request, response) => {
        try {
          const { nimMhs, idMK, idDosen } = request.params
          const {
            nim,
            id_mata_kuliah,
            id_dosen,
            nilai,
            keterangan
          } = request.body

          const checkData = await checkDataNilai(nimMhs, idMK, idDosen)
          if(checkData.length < 1) {
            return helper.response(
                response,
                400,
                'Data not found'
              )
          }

          const checkNimMahasiswaUpdate = await checkNim(nim)
          if(checkNimMahasiswaUpdate.length < 1) {
            return helper.response(
                response,
                400,
                'new NIM not found'
              )
          }

          const checkIdMataKuliahUpdate = await checkIdKuliah(id_mata_kuliah)
          if(checkIdMataKuliahUpdate.length < 1) {
            return helper.response(
                response,
                400,
                'new id_mata_kuliah not found'
              )
          }

          const checkDosenUpdate = await checkIdDosen(id_dosen)
          if(checkDosenUpdate.length < 1) {
            return helper.response(
                response,
                400,
                'new id_dosen not found'
              )
          }
    
          const setData = {
            nim,
            id_mata_kuliah,
            id_dosen,
            nilai,
            keterangan
          }
          console.log(setData)
          const result = await updateDataNilai(setData, nimMhs, idMK, idDosen)
          return helper.response(response, 200, 'Success Update Data Nilai', result)
        } catch (error) {
            console.log(error)
          return helper.response(response, 400, 'Bad Request', error)
        }
      },

      deleteNilai: async (request, response) => {
        try {
            const { nimMhs, idMK, idDosen } = request.params
            
            const checkData = await checkDataNilai(nimMhs, idMK, idDosen)
            if(checkData.length < 1) {
              return helper.response(
                  response,
                  400,
                  'Data not found'
                )
            }

            const result = await deleteDataNilai(nimMhs, idMK, idDosen)
            return helper.response(
              response,
              200,
              `Success Delete Nilai`
            )
        } catch (error) {
          return helper.response(response, 400, 'Bad Request', error)
        }
      },

      getAllNilai: async (request, response) => {
        try {
          const result = await getAllNilai()
          return helper.response(response, 200, 'Success get all data nilai', result)
        } catch (error) {
          return helper.response(response, 400, 'Bad Request', error)
        }
      },

      getAverage: async (request, response) => {
        try {
          const result = await getAvg()
          return helper.response(response, 200, 'Success get average data mahasiswa', result)
        } catch (error) {
          return helper.response(response, 400, 'Bad Request', error)
        }
      },

      getAverageJurusan: async (request, response) => {
        try {
          const result = await getAvgJurusan()
          return helper.response(response, 200, 'Success get average data jurusan', result)
        } catch (error) {
          return helper.response(response, 400, 'Bad Request', error)
        }
      },


}