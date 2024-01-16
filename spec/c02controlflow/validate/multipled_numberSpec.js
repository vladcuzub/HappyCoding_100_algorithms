describe('Checks if a number is a multiple of 3 or 7, but not both.', function () {

    it('The number must be multiple to 3', function () {
        let inputNumber = 15;

        let result = multipleNumber(inputNumber)

        expect(result).toBe(true)
    })
    it('The number must be multiple to 7', function () {
        let inputNumber = 15;

        let result = multipleNumber(inputNumber)

        expect(result).toBe(true)
    })
    it('The number must be not multiple to both', function () {
        let inputNumber = 21;

        let result = multipleNumber(inputNumber)

        expect(result).toBe(false)
    })

})