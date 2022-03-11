function conversaoMetroCentimetro(){
   
    let centimetro,metros,conversao
    
    conversaoMetroCentimetro = document.querySelector("#conversaoMetroCentimetro").value
    conversao = parsefloat(conversao)
    metros = document.querySelector("#metros").innerHTML="Digite o valor em metro para converter em centimetros"
    
    conversao = metros * 100
    
    centimetro = document.querySelector("#convertido").innerHTML="valor convertido" + conversao

}