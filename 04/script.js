let n1
let n2
let n3
let n4
let media

console.log("Informe um nota!")
n1 = 10
console.log("a nota informada foi",n1)

console.log("Informe a segunda nota!")
n2 = 10
console.log("a segunda nota informada foi",n2)

console.log("Informe a terceira nota!")
n3 = 10
console.log("a terceira nota informada foi",n3)

console.log("Informe a quarta nota!")
n4 = 10
console.log("a quarta nota informada foi",n4)

media = (n1 + n2 + n3 + n4)/4
if(media >= 7){
    console.log("Aprovado")
} else {
    if(media <= 6) {
       console.log("Reprovado")
    }
}

