const saudacao = document.querySelector('.saudacao');

const chave = '8e3a25d76032d63792ae7ac1b9212f2b';

const cidade = document.querySelector('.input-cidade');
const botao = document.querySelector('.botao-busca');
const titulo = document.querySelector('.cidade');
const temperatura = document.querySelector('.temp')
const previsao = document.querySelector('.texto-previsao');

botao.addEventListener('click', buscarCidade);

async function buscarCidade(){
    let ncidade = cidade.value 

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ncidade}&appid=${chave}&units=metric&lang=pt_br`)
    .then(resposta => resposta.json())

    titulo.textContent = "Tempo em " + dados.name
    temperatura.textContent = Math.ceil(dados.main.temp) + "°C"
    previsao.textContent = dados.weather[0].description
}

setInterval(relogio, 1000)

function relogio(){
    let horadehoje = new Date()
    let hora = horadehoje.getHours()

    if(hora > 5 && hora < 12){
        saudacao.innerText='Bom Dia'
    }else if(hora >= 12 && hora < 18){
        saudacao.innerText= 'Boa Tarde'
    }else{
        saudacao.innerText= 'Boa Noite'
    }
}