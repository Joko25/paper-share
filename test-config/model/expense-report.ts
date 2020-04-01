

import * as moment from 'moment';
export const blankExpenseReport = {
  category: '',
  from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  to: moment().format('YYYY-MM-DD'),
}

export const validExpenseReport = {
  category: 'testCategory',
  from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  to: moment().format('YYYY-MM-DD'),
}

export const invalidExpenseReportCategory = {
  category: '',
  from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  to: moment().format('YYYY-MM-DD'),
}

export const invalidExpenseReportDate = {
  category: 'testCategory',
  from: moment().format('YYYY-MM-DD'),
  to: moment().subtract(30, 'days').format('YYYY-MM-DD'),
}