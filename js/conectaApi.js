async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); //espera o fetch terminar para retornar o resultado da requisição
    //fetch recebe a url da api e retorna uma promessa/promise, quando não coloca parametro e get 
    const conexaoConvertida = await conexao.json();
    //console.log(conexao);
    // console.log(conexaoConvertida);
    return conexaoConvertida;
}

async function criaVideo() {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", //metodo
        headers: {
            "Content-type": "application/json" //especifica o tipo de arquivo que está sendo enviado ou recebido
        },
        body:
    })
}

export const conectaApi = {
    listaVideos
}