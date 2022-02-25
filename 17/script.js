function maiorNumero(n1=0,n2=0,n3=0){
if(n1 > n2 && n1 > n3){
    console.log("O maior numero informado e",n1)
}else if(n2 > n1 && n2 > n3){
    console.log("O maior numero informado e",n2)
}else if (n3 > n1 && n3 > n2){
    console.log("O  maior numero informado e",n3)
}
}
maiorNumero(90,10,50)
function soma(n1,n2){
    let total
    total = n1+n2
    console.log(total)
}
soma(90,10) 