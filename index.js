// 01
// const cat = {
//     name : "Garfield",
//     age : 3,
//     isCute: true
// }

// console.log(cat)

// if(cat.isCute){
//     console.log("So cute !")
// }

// 02
// const cat = {
//     name : "Garfield",
//     age : 3,
//     isCute: true
// }

// const cat2 = {
//     name : "Felix",
//     age : 2,
//     isCute: false 
// }

// const cats = [cat, cat2]

// console.log(cats[0].age)
// console.log(cat["age"])
// console.log(cats[1].isCute)
// console.log(cat2["isCute"])

// 03
// const checkIsEven = (num) => {
//     if(num % 2 === 0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }

// checkIsEven(2)

// 04
// const compare = (x, y) => {
//     if( x > y){
//         console.log(`${x} is bigger`)
//     }else if(x < y){
//         console.log(`${y} is bigger`)
//     }else{
//         console.log("both are the same")
//     }
// }

// compare(4,3)

// 05
// const addUp = (num) => {
//     total = 0
//     for(let i = 0; i <= num; i++){
//         total += i
//     }
//     console.log(total) 
// }
// addUp(12)

// 06
// const format = (num) => {
//     const hour = Math.floor((num/60) / 60)
//     const minutes = Math.floor((((num/60) / 60) - hour) * 60)
//     const secondes = (num - (hour * 3600)) - (minutes * 60)
//     console.log(`heures : ${hour} minutes : ${minutes} secondes : ${secondes}`)
// }

// format(3700)

// 07
// const generatePassword = (num) => {
//     const letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//     let password = []

//     if(num < 6 || num > 15){
//         return console.log("Error")
//     }else{
//         for(let i = 0; i < num; i++){
//             const random = Math.floor(Math.random() * letter.length)
//             password[i] = letter[random]
//         }
//         console.log(password.join(""))
//     }
// }
//  generatePassword(12)

// 08
// const launchDice = (numberOfDice) => {
//     let total = 0
//     for (let i = 0; i < numberOfDice; i++){
//         total += Math.floor(Math.random() * 6)
//     }
//     return total
// }

// let joueur1 = launchDice(5)
// let joueur2 = launchDice(5)

// if(joueur1 > joueur2){
//     console.log(`joueur1 = ${joueur1} > joueur2 = ${joueur2}`)
// }else if(joueur1 < joueur2){
//     console.log(`joueur1 = ${joueur1} < joueur2 = ${joueur2}`)
// }else{
//     console.log("tie")
// }

