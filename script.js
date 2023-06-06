const calculoMedia = () =>{
    const valores = []
    let total = 0

    for(let i = 1; i < 4; i++){
        const userInput = prompt(`Informe ${i}º valor: `)
        valores.push(Number(userInput))
    }

    valores.forEach((valor)=>{
        total += valor
    })

    total = total / 3;

    alert(`O valor total é ${total}`)
}

calculoMedia()