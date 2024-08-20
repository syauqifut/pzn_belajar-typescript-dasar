describe('Array', function () {
    it('should same with javascript', function () {
        const names: string[] = ['Syauqi', 'Futtaqi'];
        const values: number[] = [1, 2, 3, 4, 5];

        console.info(names);
        console.info(values);
    });

    it('should support readonly array', function () {
        const hobbies: ReadonlyArray<string> = ['Membaca', 'Menulis', 'Menggambar'];

        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        console.info(hobbies[2]);

        // hobbies[0] = 'Menyanyi';
    });

    it('should support tuple', function () {
        const person: readonly [string, number] = ['Syauqi', 22];

        console.info(person);
        console.info(person[0]);
        console.info(person[1]);

        // person[0] = 'Anto';
        // person = [22, 'Syauqi'];
    });
});