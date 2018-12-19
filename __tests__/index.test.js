const { clean, validate, format } = require('../index')

const cleanData = [
  ['187225779', '187225779'],
  ['18.722.577-9', '187225779'],
  ['7.903.486-k', '7903486K'],
  ['7*903*486*k', '7903486K'],
  ['0018.722.577-9', '187225779'],
  ['00000187225779', '187225779'],
]

const validateData = {
  true: [
    '18.722.577-9',
    '18722577-9',
    '187225779',
    '7.903.486-k',
    '7903486-k',
    '7903486k',
  ],
  false: [
    '18.722.577-0',
    '18,722,577-9',
    '18*722*577-9',
    '18-722-577-9',
    'failure18.722.577-9',
    '7903486-1',
    187225779,
    '0',
    0,
  ],
}

const formatData = [
  ['18.722.577-9', '18.722.577-9'],
  ['187225779', '18.722.577-9'],
  ['18*722*577*9', '18.722.577-9'],
  ['7903486-k', '7.903.486-K'],
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
