// Ana Luiza

let mochila = [];

function adicionarItem (item) {
    mochila.push(item);
}

function removerItem (item) {
    let posicao = mochila.indexOf(item);
    mochila.splice(posicao, 1);
}