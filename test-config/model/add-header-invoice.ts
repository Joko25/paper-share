export const blankHeader = {
  number: '',
  date: null,
  duedate: '',
  currency_symbol: '',
}

export const validHeader = {
  number: '123',
  date: (new Date()).toISOString() + '',
  duedate: (new Date()).toISOString() + '',
  currency_symbol: 'Rupiah',
}

export const invalidHeaderNumber = {
  number: '',
  date: (new Date()).toISOString() + '',
  duedate: (new Date()).toISOString() + '',
  currency_symbol: 'Rupiah',
}

export const invalidHeaderDate = {
  number: '123',
  date: null,
  duedate: (new Date()).toISOString() + '',
  currency_symbol: 'Rupiah',
}

export const invalidHeaderDueDate = {
  number: '123',
  date: (new Date()).toISOString() + '',
  duedate: null,
  currency_symbol: 'Rupiah',
}


export const invalidHeaderCurrency = {
  number: '123',
  date: (new Date()).toISOString() + '',
  duedate: (new Date()).toISOString() + '',
  currency_symbol: '',
}