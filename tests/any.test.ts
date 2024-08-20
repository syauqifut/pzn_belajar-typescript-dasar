describe('any', function () {
    it('should support in typescript', function () {
        const person: any = {
            id: 1,
            name: 'Syauqi',
            age: 26
        };

        person.age = '18';

        console.info(person);
    });
});