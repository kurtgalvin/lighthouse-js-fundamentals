for (let i = 100; i < 201; i++) {
  let myString = ""
  if (i % 3 === 0) {
    myString += "Loopy"
  }
  if (i % 4 === 0) {
    myString += "Lighthouse"
  }
  console.log(myString ? myString : i)
}