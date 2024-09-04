const { Mdc } = require ('./01_mdc');

describe('Teste mdc', () => {
    it('Realizar o mdc entre dois valores', () => {
        expect(Mdc(60,48)).toBe(12);
        expect(Mdc(81,27)).toBe(27);
        expect(Mdc(56,98)).toBe(14);
        expect(Mdc(45,75)).toBe(15);
        expect(Mdc(100,85)).toBe(5);
        expect(Mdc(70,25)).toBe(5);
    });
});