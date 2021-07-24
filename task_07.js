const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123']

const isLoginValid = function(login) {
  if(login.length >= 4 && login.length <= 16) {
      return true
  }
  return false
}
const isLoginUnique = function(allLogins, login) {
  if(!allLogins.includes(login)) {
    return true
  }
  return false
}
const addLogin = function(allLogins, login) {
  if(isLoginValid(login)) {

      if(isLoginUnique(allLogins, login)) {
        allLogins.push(login)
        return console.log('Логин успешно добавлен!')
      }

      return console.log('Такой логин уже используется!')

  } 
  return console.log('Ошибка! Логин должен быть от 4 до 16 символов')
}


console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'