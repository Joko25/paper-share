
export const blankAddProduct = {
  item_name: '',
  item_description: '',
  price: '',
  quantity: '',
  tax: '',
}
export const validAddProduct = {
  item_name: 'Test',
  item_description: 'Test',
  price: 21000,
  quantity: 1,
  tax: '',
}
export const validAddProductAll = {
  item_name: 'Test',
  item_description: 'Test',
  price: 21000,
  quantity: 1,
  tax: '231daw',
}
export const invalidAddProductItemName = {
  item_name: '',
  item_description: 'Test',
  price: 21000,
  quantity: 1,
  tax: '231dwa',
}
export const invalidAddProductItemDescription = {
  item_name: 'Test',
  item_description: '',
  price: 21000,
  quantity: 1,
  tax: '231daw',
}
export const invalidAddProductPrice = {
  item_name: 'Test',
  item_description: 'Test',
  price: '',
  quantity: 1,
  tax: '231daw',
}
export const invalidAddProductQuantity = {
  item_name: 'Test',
  item_description: 'Test',
  price: 21000,
  quantity: '',
  tax: '231daw',
}