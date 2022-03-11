function media(nota1,nota2,nota3,nota4){
    nota1 = parseFloat(nota1)
    nota2 = parseFloat(nota2)
    nota3 = parseFloat(nota3)
    nota4 = parseFloat(nota4)
    let media
    document.querySelector("#resultado").innerHTML="Digite a 1 nota" + nota1
    
    document.querySelector("#resultado").innerHTML="Digite a 2 nota" + nota2
    
    document.querySelector("#resultado").innerHTML="Digite a 3 nota" + nota3
    
    document.querySelector("#resultado").innerHTML="Digite a 4 nota" + nota4
    
    media =(nota1 + nota2 + nota3 + nota4) / 4
    document.querySelector("#resultado").innerHTML="A media do aluno e" + media
}