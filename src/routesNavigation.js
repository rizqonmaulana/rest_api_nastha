const router = require('express').Router()
// const product = require('./routes/r_product')
// const category = require('./routes/r_category')
// const coupon = require('./routes/r_coupon')
const user = require('./routes/userRoute.js')
const dataNilai = require('./routes/dataNilaiRoute.js')

// router.use('/product', product)
// router.use('/category', category)
// router.use('/coupon', coupon)
router.use('/user', user)
router.use('/nilai', dataNilai)

module.exports = router
