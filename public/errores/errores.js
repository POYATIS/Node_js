const validateUser = ({nom, age, password} = {}) => {

  if (!nom) throw new ValidateError('name is required')
  if (!age) throw new ValidateError('age is required')
  if (!password) throw new ValidateError('password is required')

  try {
    mongodb.connect()
  } catch(e) {
    throw new ConecctionError ('database is not avalilable')
  }
}

class ConecctionError extends Error {}
class ValidateError extends Error {}

const nom = 'san'
const age = 54
const password = null

try {
  validateUser({nom, age, password})

}catch (e) {
  console.log(e.name)
  // si el error es de conecsion hago una cosa
  if (e.name === 'ConecctionError') {
    setTimeout(() => {
      validateUser({nom,age,password})
    })
  }
}

