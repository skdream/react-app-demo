import add from '../src/add'


describe('加法函数测试', () => {
    it('1加2应该等于3', () => {
        expect(add(1, 2)).toBe(3);
    });
});

