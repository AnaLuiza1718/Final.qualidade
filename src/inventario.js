// Ana Luiza

let mochila = [];

function adicionarItem (item) {
    mochila.push(item);
}

function removerItem (item) {
    let posicao = mochila.indexOf(item);
    if (posicao !== -1) {
        mochila.splice(posicao, 1);
    }
    mochila.splice(posicao, 1);
}

module.exports = {
    mochila, 
    adicionarItem,
    removerItem
};