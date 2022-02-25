function multa(peso_pescado){

    let peso_regulamento

    let multa

    let peso_excesso

    let total_multa

    console.log("Informe os kgs de peixe que você pescou:")

    peso_regulamento = 50

    multa = 4

    peso_excesso = peso_pescado - peso_regulamento

    total_multa = peso_excesso * multa

    console.log("O valor da multa é: ", total_multa)

}

multa(60)