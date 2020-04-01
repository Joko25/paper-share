export const blankExpense = {
  name: '',
  vendor: '',
  account_id: '',
  expense_date: '',
  notes: '',
  category: '',
  amount: '',
}

export const validExpense = {
  name: 'Testing Expense',
  vendor: '',
  account_id: '1',
  expense_date: '24 07 1990',
  notes: '',
  category: '',
  amount: 1000,
}

export const validExpenseAll = {
  name: 'Testing Expense',
  vendor: 'Testing Vendor',
  account_id: '1',
  expense_date: '24 07 1990',
  notes: 'Testing',
  category: 'Testing',
  amount: 1000,
}

export const invalidExpenseName = {
  name: '',
  vendor: 'Testing Vendor',
  account_id: '1',
  expense_date: '24 07 1990',
  notes: 'Testing',
  category: 'Testing',
  amount: 1000,
}
export const invalidExpenseAccountId = {
  name: 'Testing Expense',
  vendor: 'Testing Vendor',
  account_id: '',
  expense_date: '24 07 1990',
  notes: 'Testing',
  category: 'Testing',
  amount: 1000,
}
export const invalidExpenseExpense_date = {
  name: 'Testing Expense',
  vendor: 'Testing Vendor',
  account_id: '1',
  expense_date: null,
  notes: 'Testing',
  category: 'Testing',
  amount: 1000,
}
export const invalidExpenseAmount = {
  name: 'Testing Expense',
  vendor: 'Testing Vendor',
  account_id: '1',
  expense_date: '24 07 1990',
  notes: 'Testing',
  category: 'Testing',
  amount: '',
}
export const blankExpenseEdit = {
  uuid: '',
  name: '',
  vendor: '',
  account_id: '',
  expense_date: '',
  notes: '',
  category: '',
  amount: '',
}

export const validExpenseEdit = {
  uuid: '1',
  name: 'Testing Expense',
  vendor: '',
  account_id: '1',
  expense_date: '24 07 1990',
  notes: '',
  category: '',
  amount: 1000,
}

export const validExpenseAllEdit = {
  uuid: '1',
  name: 'Testing Expense',
  vendor: 'Testing Vendor',
  account_id: '1',
  expense_date: '24 07 1990',
  notes: 'Testing',
  category: 'Testing',
  amount: 1000,
}

export const invalidExpenseNameEdit = {
  uuid: '1',
  name: '',
  vendor: 'Testing Vendor',
  account_id: '1',
  expense_date: '24 07 1990',
  notes: 'Testing',
  category: 'Testing',
  amount: 1000,
}
export const invalidExpenseAccountIdEdit = {
  uuid: '1',
  name: 'Testing Expense',
  vendor: 'Testing Vendor',
  account_id: '',
  expense_date: '24 07 1990',
  notes: 'Testing',
  category: 'Testing',
  amount: 1000,
}
export const invalidExpenseExpense_dateEdit = {
  uuid: '1',
  name: 'Testing Expense',
  vendor: 'Testing Vendor',
  account_id: '1',
  expense_date: null,
  notes: 'Testing',
  category: 'Testing',
  amount: 1000,
}
export const invalidExpenseAmountEdit = {
  uuid: '1',
  name: 'Testing Expense',
  vendor: 'Testing Vendor',
  account_id: '1',
  expense_date: '24 07 1990',
  notes: 'Testing',
  category: 'Testing',
  amount: '',
}