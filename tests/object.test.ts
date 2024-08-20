describe('Object Type', function () {
    it('should support in typescript', function () {
        const person: { id: string, name: string, hobbies?: string[] } = {
            id: '1',
            name: 'Syauqi'
        };

        console.info(person);

        person.name = 'Anto';
        person.id = '2';
        // person.address = 'Jl. Raya';

        console.info(person);
    });
});