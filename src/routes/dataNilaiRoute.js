const router = require('express').Router()
const { postNilai, updateNilai, deleteNilai, getAllNilai, getAverage, getAverageJurusan } = require('../controller/dataNilaiController')
const { isLogin, isDosen } = require('../middleware/auth')

router.post('/', isLogin, isDosen, postNilai)
router.put('/:nimMhs/:idMK/:idDosen', isLogin, isDosen, updateNilai)
router.delete('/:nimMhs/:idMK/:idDosen', isLogin, isDosen, deleteNilai)
router.get('/all', isLogin, getAllNilai)
router.get('/average', isLogin, getAverage)
router.get('/average/jurusan', isLogin, getAverageJurusan)

module.exports = router
