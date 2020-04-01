

import * as moment from 'moment';
export const blankPaymentReport = {
  client: '',
  from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  to: moment().format('YYYY-MM-DD'),
}

export const validPaymentReport = {
  client: 'testClient',
  from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  to: moment().format('YYYY-MM-DD'),
}

export const invalidPaymentReportClient = {
  client: '',
  from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  to: moment().format('YYYY-MM-DD'),
}

export const invalidPaymentReportDate = {
  client: 'testClient',
  from: moment().format('YYYY-MM-DD'),
  to: moment().subtract(30, 'days').format('YYYY-MM-DD'),
}