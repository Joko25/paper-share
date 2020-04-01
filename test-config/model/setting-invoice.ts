

export const blankSettingInvoice = {
  start_number: '',
  terms: '',
  template: '',
}

export const validSettingInvoice = {
  start_number: 12,
  terms: '',
  template: {
    description: 'Custom 5',
    value: 6,
    image: './assets/img/custominvoice5.jpg',
    imageUrl: 'https://paper.id/webappv1/assets/images/custominvoice5.jpg'
  },
}

export const validSettingInvoiceAll = {
  start_number: 12,
  terms: 'Testing',
  template: {
    description: 'Custom 5',
    value: 6,
    image: './assets/img/custominvoice5.jpg',
    imageUrl: 'https://paper.id/webappv1/assets/images/custominvoice5.jpg'
  },
}

export const invalidSettingInvoiceStartNumber = {
  start_number: '',
  terms: 'Testing',
  template: {
    description: 'Custom 5',
    value: 6,
    image: './assets/img/custominvoice5.jpg',
    imageUrl: 'https://paper.id/webappv1/assets/images/custominvoice5.jpg'
  },
}

export const invalidSettingTemplete = {
  start_number: 12,
  terms: 'Testing',
  template: '',
}
