

export const blankPayment = {
  invoice_id: '',
  bank_account_name: '',
  payment_date: null,
  method: '',
  amount: '',
  notes: '',
}
export const validPayment = {
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: '',
}
export const validPaymentAll = {
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: 'Test',
}
export const invalidInvoiceId = {
  invoice_id: '',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: 'Test',
}
export const invalidBankAccountName = {
  invoice_id: '123',
  bank_account_name: '',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: 'Test',
}
export const invalidPaymentDate = {
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: null,
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: 'Test',
}
export const invalidMethod = {
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: '',
  amount: 1000,
  notes: 'Test',
}
export const invalidAmount = {
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: '',
  notes: 'Test',
}



export const blankEditPayment = {
  uuid: '',
  invoice_id: '',
  bank_account_name: '',
  payment_date: null,
  method: '',
  amount: '',
  notes: '',
}
export const validEditPayment = {
  uuid: '',
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: '',
}
export const validEditPaymentAll = {
  uuid: '123',
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: 'Test',
}
export const invalidEditInvoiceId = {
  uuid: '123',
  invoice_id: '',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: 'Test',
}
export const invalidEditBankAccountName = {
  uuid: '123',
  invoice_id: '123',
  bank_account_name: '',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: 'Test',
}
export const invalidEditPaymentDate = {
  uuid: '123',
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: null,
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: 1000,
  notes: 'Test',
}
export const invalidEditMethod = {
  uuid: '123',
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: '',
  amount: 1000,
  notes: 'Test',
}
export const invalidEditAmount = {
  uuid: '123',
  invoice_id: '123',
  bank_account_name: 'BCA',
  payment_date: (new Date()).toISOString() + '',
  method: 'c65882fb-5ceb-4438-8b1f-4c307106840c',
  amount: '',
  notes: 'Test',
}