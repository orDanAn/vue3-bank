const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Такая почта не зарегестрирована',
  INVALID_PASSWORD: 'Пароль не верный',
  auth: 'Необходима авторизация'
}

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'неизвестная ошибка'
}
