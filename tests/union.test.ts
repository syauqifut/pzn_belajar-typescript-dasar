describe('Union Type', function () {
    it('should support in typescript', function () {
        let sample: number | string | boolean = 'syauqi';
        console.info(sample);

        sample = 1;
        console.info(sample);

        sample = true;
        console.info(sample);
    });

    it('should support typeof operator', function () {
        function process(value: number | string | boolean) {
            if (typeof value === 'string') {
                return value.toUpperCase();
            } else if (typeof value === 'number') {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process('syauqi')).toBe('SYAUQI');
        expect(process(1)).toBe(3);
        expect(process(true)).toBe(false);
    });
});