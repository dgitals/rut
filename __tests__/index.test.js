const { clean, validate, format } = require('../index')

const cleanData = [
  ['189726317', '189726317'],
  ['18.972.631-7', '189726317'],
  ['12.345.678-k', '12345678K'],
  ['12*345*678*k', '12345678K'],
  ['0018.972.631-7', '189726317'],
  ['00000189726317', '189726317'],
]

const validateData = {
  true: [
    '18.972.631-7',
    '18972631-7',
    '189726317',
    '9.068.826-k',
    '9068826-k',
    '9068826k',
  ],
  false: [
    '18.972.631-0',
    '18,972,631-7',
    '18*972*631-7',
    '18-972-631-7',
    'error18.972.631-7',
    '9068826-1',
    189726317,
    '0',
    0,
  ],
}

const formatData = [
  ['18.972.631-7', '18.972.631-7'],
  ['189726317', '18.972.631-7'],
  ['18*972*631*7', '18.972.631-7'],
  ['9068826-k', '9.068.826-K'],
]

describe('✨ Clean tests', () => {
  test.each(cleanData)('Cleaning rut %s should return %s ✨', (rut, expected) =>
    expect(clean(rut)).toBe(expected)
  )
})

describe('✨ Validate tests', () => {
  test.each(validateData.true)('Validating rut %s should return True ✨', rut =>
    expect(validate(rut)).toBeTruthy()
  )
  test.each(validateData.false)('Validating rut %s should return False ✨', rut =>
    expect(validate(rut)).toBeFalsy()
  )
})

describe('✨ Format tests', () => {
  test.each(formatData)('Formatting rut %s should return %s ✨', (rut, expected) =>
    expect(format(rut)).toBe(expected)
  )
})
