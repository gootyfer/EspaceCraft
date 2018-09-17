
const {
  removeFirst100Bytes,
  removeLast100Bytes,
  remove1OutOf3Bytes,
  reverseBytes,
} = require('./index')

it('revomes first 100 bytes', ()=>{
  const firstHalf = Array(100).fill('a', 0, 100);
  const secondHalf = Array(100).fill('b', 0, 100);
  const input = firstHalf.concat(secondHalf);
  
  const output = removeFirst100Bytes(input);

  expect(output).toEqual(secondHalf);
})

it('revomes last 100 bytes', ()=>{
  const firstHalf = Array(100).fill('a', 0, 100);
  const secondHalf = Array(100).fill('b', 0, 100);
  const input = firstHalf.concat(secondHalf);
  
  const output = removeLast100Bytes(input);

  expect(output).toEqual(firstHalf);
})

it('revomes 1 out of 3 bytes', ()=>{
  const input = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const expectedOutput = ['0','1','3','4','6','7','9'];
  
  const output = remove1OutOf3Bytes(input);

  expect(output).toEqual(expectedOutput);
})

it('reverses the byte array', ()=>{
  const input = ['0', '1', '2', '3'];
  const expectedOutput = ['3', '2', '1', '0'];
  
  const output = reverseBytes(input);

  expect(output).toEqual(expectedOutput);
})
