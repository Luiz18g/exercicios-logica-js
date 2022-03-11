function soma(num1,num2){
   
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    let soma
    
    document.querySelector("#resultado").innerHTML = "Digite qualquer numero" + num1

    document.querySelector("#resultado").innerHTML = "Digite qualquer numero" + num2
    
    soma = num1+num2

    document.querySelector("#resultado").innerHTML = "A soma dos dois e =" + soma


}