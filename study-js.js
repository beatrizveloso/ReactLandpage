function SomaNumeros() {
    return 2 + 2
}
//console.log(SomaNumeros())

function SomaNumero(numeroOne, numeroTwo) {
    return numeroOne + numeroTwo
}
//console.log(SomaNumero(10,20))

function SomaMulti(MultioOne, numeroTwo) {
    return numeroOne * numeroTwo
}
//console.log(SomaMulti(10,20))

const person = {
    name: "Bibi Perigosa", 
    age: 18,
    gender: "female"
}

// console.log(person.name)
// console.log(person.age)
// console.log(person.gender)

const { age, gender, name } = person 

console.log(name)
console.log(age)
console.log(gender)


