const { multiplos } = require('./03_listar_num_int')

describe('Validar os números múltiplos entre dois números', () => {
    it('CT01 - informar os múltiplos entre 5 e 7 de 1 a 1000', () => {
        expect(multiplos()).toContain(5,7,798,800);
    });
});