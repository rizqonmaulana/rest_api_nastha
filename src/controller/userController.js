const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const helper = require('../helper/response')

const {
  registerUser,
  checkEmail
} = require('../model/userModel')

module.exports = {
  registerUser: async (request, response) => {
    try {
      const {
        email,
        password,
        role
      } = request.body

      const salt = bcrypt.genSaltSync(10)
      const encryptPassword = bcrypt.hashSync(password, salt)

      const crypto = require('crypto')
      const userKey = crypto.randomBytes(20).toString('hex')

      const setData = {
        email,
        password : encryptPassword,
        role
      }

      const checkDuplicateEmail = await checkEmail(email)

      if (checkDuplicateEmail.length > 0) {
        return helper.response(
          response,
          400,
          'Duplicate Email, email has been used by another account'
        )
      }

      const result = await registerUser(setData)
      if (result) {
        return helper.response(
          response,
          200,
          'Success register account',
          result
        )
      }
    } catch (error) {
        console.log(error)
      return helper.response(response, 400, 'Bad Request', error)
    }
  },

  loginUser: async (request, response) => {
    try {
      const { email,password } = request.body
      const checkUserData = await checkEmail(email)

      if (checkUserData.length > 0) {
        const checkPassword = bcrypt.compareSync(
          password,
          checkUserData[0].password
        )

        if (checkPassword) {
          const {
            id: id,
            email: email,
            role: role
          } = checkUserData[0]

          const payload = {
            id,
            email,
            role
          }

          const token = jwt.sign(payload, 'RAHASIA', { expiresIn: '24h' })
          const result = { ...payload, token }
          return helper.response(response, 200, 'Login Success', result)
        } else {
          return helper.response(response, 400, 'Password invalid')
        }
      } else {
        return helper.response(response, 400, 'Account not Registered')
      }
    } catch (error) {
      return helper.response(response, 400, 'Bad Request', error)
    }
  },
}
