// Ana Luiza de Oliveira Silva

const {mochila, adicionarItem, removerItem} = require("../src/inventario");

   
describe("Módulo de inventário", () => {
    
    beforeEach(() => {
        mochila.length = 0;
    });

    test("Deve adicionar um item à mochila", () => {
        adicionarItem("Porção da Vida");
        expect(mochila).toContain("Porção da Vida")
    });

    test("Deve remover um item da mochila", () => {
        adicionarItem("Porção da Vida");
        adicionarItem("Escudo");
        removerItem("Porção da Vida");
        expect(mochila).toEqual(["Escudo"]);
    });

});