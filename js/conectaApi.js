async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); //espera o fetch terminar para retornar o resultado da requisição
    //fetch recebe a url da api e retorna uma promessa/promise, quando não coloca parametro e get 
    const conexaoConvertida = await conexao.json();
    //console.log(conexao);
    // console.log(conexaoConvertida);
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", //metodo
        headers: {
            "Content-type": "application/json" //especifica o tipo de arquivo que está sendo enviado ou recebido
        },
        body: JSON.stringify({ //corpo da requisição, enviando um objeto com valores, stringify transforma em string o que está sendo enviado
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possivel enviar o vídeo");
    }

    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}


async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}