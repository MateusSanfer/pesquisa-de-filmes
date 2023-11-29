const apiKey = '48d31722';

const saudacao = document.querySelector('.saudacao');
const frmpesquisa = document.querySelector("form");


frmpesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    
    const pesquisa = ev.target.pesquisa.value;

    if(pesquisa == ""){
        alert('Preenha o campo')
        return;
    }

    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
    .then(result => result.json())
    .then(json => carregaLista(json));

}
 const carregaLista = (json) => {
    const lista = document.querySelector("div.lista")
    lista.innerHTML = "";

    if(json.Response == 'False'){
        alert('Nenhum ')
    }

    json.Search.forEach(element => {

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}"/><h2>${element.Title}</h2>`

        lista.appendChild(item)

    })
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