let billAmount = prompt('Bill Amount:')
billAmount = number(billAmount)

let tipPercentage = prompt('Tip Percentage')
tipPercentage = number(tipPercentage)
tipPercentage *=.01
tipPercentage = tipPercentage*billAmount

let totalPrice = billAmount+tipPercentage

let priceMessage = `-- Bill Amount --
Before tip: ${billAmount}
Tip: ${tipPercentage}
Total: ${totalPrice}
`
console.log(priceMessage)