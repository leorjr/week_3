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

const calculoIMC = () =>{
    const userAltura = Number(prompt(`Informe a altura: `))
    const userPeso = Number(prompt(`Informe o peso: `))

    const resultado = userPeso / (userAltura * userAltura)

    alert(`o seu IMC é: ${resultado.toFixed(1)}`)
}

class Aluno{
    nome = '';
    idade = '';

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
    }
}

const cadastroAluno = () =>{
    const nome = prompt('Informe o nome do aluno: ')
    const idade = Number(prompt('Informe a idade do aluno: '))

    const aluno = new Aluno(nome, idade)

    console.log(aluno)
}

const mediaPonderada = () =>{
    let dados = []

    for(let i = 1; i < 4; i ++){
        const nota = Number(prompt('Informe a nota: '))
        const peso = Number(prompt('Informe o peso da nota: '))

        dados.push({nota, peso})
    }

    dados.forEach(dado =>{
        let notaComPeso = dado.nota * dado.peso
        dado.notaComPeso = notaComPeso
    })

    let total = 0
    let totalpesos = 0
    dados.forEach(dado =>{
        total += dado.notaComPeso
        totalpesos += dado.peso
    })

    const mediaPonderada = total / totalpesos

    console.log(mediaPonderada)
}

class Pessoa{
    nome = ''
    sobrenome = ''

    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    apresentarNomeComSobrenome(){
        return console.log(`${this.nome} ${this.sobrenome}`)
    }
}

const concatenacao = () =>{

    const nome = prompt('Informe o nome: ')
    const sobrenome = prompt('Informe o sobrenome: ')

    const pessoa = new Pessoa(nome, sobrenome)
    pessoa.apresentarNomeComSobrenome()
}