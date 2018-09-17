const fs = require('fs')

const removeFirst100Bytes = array =>
  array.slice(100)

const removeLast100Bytes = array =>
  array.slice(0, array.length - 100)

const remove1OutOf3Bytes = array =>
  array.filter(
      (c, index) => (index + 1) % 3 !== 0
    )

const reverseBytes = array => array.reverse()

const readFile = fileName => fs.readFileSync(fileName)

const applyFirstBriefing = fileName =>{
  const fileContent =  Array.from(readFile(fileName));
  console.log(fileContent.length);
  const result1 = removeLast100Bytes(removeFirst100Bytes(fileContent));
  console.log(result1.length);
  
  const result = reverseBytes(
    remove1OutOf3Bytes(
      removeLast100Bytes(
        removeFirst100Bytes(
          fileContent
        )
      )
    )
  );
  console.log(result.length);
  fs.writeFileSync('out', Buffer.from(result));
}
applyFirstBriefing('CPE1704TKS.txt')

module.exports = {
  removeFirst100Bytes,
  removeLast100Bytes,
  remove1OutOf3Bytes,
  reverseBytes,
}