const { minimo, maximo} = require('./02_array_nume')

describe('Teste de Máximo e Mínimo em um array', () => {
    it('CT01 - Deve retornar o valor máximo', () => {
        expect(maximo()).toBe(9);
    });

    it('CT02 - Deve retornar o valor mínimo', () => {
        expect(minimo()).toBe(1);
    });
});