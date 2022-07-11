import * as yup from 'yup'

export const createAccountModel = yup.object().shape({
  usename: yup.string().min(4,'O campo precisa de no minimo 4 caracteres').required(),
  email: yup.string().email('O campo precisa de um email valido').required(),
  password: yup.string().min(4,'O campo precisa de no minimo 4 caracteres').required(),
}) 