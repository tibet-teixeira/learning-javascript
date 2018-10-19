const number1 = 7.8554
const number2 = 7.8542
const number3 = 7.8452
const number4 = 7.8614
const number5 = 7.8414
const inf = 7 / 0
let show = "Shooow!"

console.log(number1.toFixed(2), 
            number2.toFixed(2), 
            number3.toFixed(2), 
            number4.toFixed(2), 
            number5.toFixed(2).toString().split('.'))

console.log(inf, typeof inf)

console.log(show * 2)

console.log("Show!" + "\nShow!")

console.log(show.charAt(6))
console.log(show.indexOf('o'))
console.log(show.substring(2, 1))
console.log(show.substring(1, 2))
console.log(show.substring(2))

console.log('Replace: ' + show.replace(/o/g, 'O'))

valores = [10, 12, 15, 'teste']

valores.pop()
delete valores[0]
console.log(valores.length)
console.log(valores)
console.log(valores[0])