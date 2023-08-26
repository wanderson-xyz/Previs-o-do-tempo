

const key = "7aae785226d12749805bc59f2711d7c8";

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = `${Math.floor(dados.main.temp)}° C`
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    console.log(dados)
}

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    colocarDadosNaTela(dados)

}

function cliqueiNoBotao () {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}

