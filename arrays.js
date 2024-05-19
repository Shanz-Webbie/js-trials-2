

// 1. printIndices
/* Print each item in the array, followed by its index.

// The output should look like this:
//     apple 0
//     berry 1
//     cherry 2

// Arguments:
//     items (list)

// Returns:
//     None
*/
function printIndices(items) {
  for(let i in items) {
  //for (let i = 0; i< items.length; i++) {
    console.log(`${items[i]} ${i}`) //similar to Python's f"" string
  }
}
printIndices(['apple', 'berry', 'cherry'])

// 2. everyOtherItem
function everyOtherItem(items) {
  //   console.log('index:', i)
  //   console.log('LIST:', items)

  // for (let i = 0; i < items.length; i++) {
  for(let i in items) {
      if (i % 2 === 0) {
        console.log(items[i])
    }
  }
}
everyOtherItem(['Ivan', 'Jenny', 'Shannon', 'Jen', 'Sorina'])

// 3. smallestNItems
function smallestNItems(items, n) {

}

smallestNItems()
