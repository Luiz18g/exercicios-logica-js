function calcularSalario(){
    
    let salarioBruto,salarioLiquido,inss,sindicato,impostoRenda
    
    salarioBruto = document.querySelector("#salario_bruto").value
    salarioBruto=parseFloat(salarioBruto)

    inss = salarioBruto * 8/100
    sindicato = salarioBruto * 5/100
    impostoRenda = salarioBruto * 11/100
    salarioLiquido = salarioBruto - inss - sindicato - impostoRenda

    document.querySelector("#resultado").innerHTML = "salario Bruto: R$" + salarioBruto
    document.querySelector("#resultado").innerHTML += "<br>"
    document.querySelector("#resultado").innerHTML += "INSS (8%): R$" + inss
    document.querySelector("#resultado").innerHTML += "<br>"
    document.querySelector("#resultado").innerHTML += "sindicato (5%):R$" + sindicato
    document.querySelector("#resultado").innerHTML += "<br>"
    document.querySelector("#resultado").innerHTML += "imposto de renda(11%): R$" + impostoRenda
    document.querySelector("#resultado").innerHTML += "<br>"
    document.querySelector("#resultado").innerHTML += "salario liquido: R$" + salarioLiquido
    console.log(salarioBruto)
}
 