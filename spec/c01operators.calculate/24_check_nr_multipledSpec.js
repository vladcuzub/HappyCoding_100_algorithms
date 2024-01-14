describe('Checks whether they are multiplied or not', function () {

    it('The division result should not give a remainder', function () {
        let x = 10;
        let y = 2

        let result = multipledNumber(x,y)

        expect(result).toBe('Multiplied!')
    })
    it('The division result should  give a remainder', function () {
        let x = 10;
        let y = 3

        let result = multipledNumber(x, y)

        expect(result).toBe('Not multiplied!')
    })

})