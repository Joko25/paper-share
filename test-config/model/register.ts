

export const blankRegister = {
  name: '',
  email: '',
  phone: '',
  company_name: '',
  password: '',
  password_confirmation: '',
}
export const validRegister = {
  name: 'testing',
  email: 'testing@paper.id',
  phone: 8032131221,
  company_name: 'Testing Register',
  password: 'password',
  password_confirmation: 'password',
}
export const invalidRegisterName = {
  name: '',
  email: 'testing@paper.id',
  phone: 8032131221,
  company_name: 'Testing Register',
  password: 'password',
  password_confirmation: 'password',
}
export const invalidRegisterEmail = {
  name: 'testing',
  email: '',
  phone: 8032131221,
  company_name: 'Testing Register',
  password: 'password',
  password_confirmation: 'password',
}
export const invalidRegisterPhone = {
  name: 'testing',
  email: 'testing@paper.id',
  phone: '',
  company_name: 'Testing Register',
  password: 'password',
  password_confirmation: 'password',
}
export const invalidRegisterCompanyName = {
  name: 'testing',
  email: 'testing@paper.id',
  phone: 8032131221,
  company_name: '',
  password: 'password',
  password_confirmation: 'password',
}
export const invalidRegisterPassword = {
  name: 'testing',
  email: 'testing@paper.id',
  phone: 8032131221,
  company_name: 'Testing Register',
  password: '',
  password_confirmation: 'password',
}
export const invalidRegisterPasswordConfirm = {
  name: 'testing',
  email: 'testing@paper.id',
  phone: 8032131221,
  company_name: 'Testing Register',
  password: 'password',
  password_confirmation: '',
}