

import * as moment from 'moment';
export const blankProfitReport = {
  from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  to: moment().format('YYYY-MM-DD'),
}

export const validProfitReport = {
  from: moment().subtract(30, 'days').format('YYYY-MM-DD'),
  to: moment().format('YYYY-MM-DD'),
}

export const invalidProfitReportDate = {
  from: moment().format('YYYY-MM-DD'),
  to: moment().subtract(30, 'days').format('YYYY-MM-DD'),
}