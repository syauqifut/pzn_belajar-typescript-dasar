describe('Optional', function () {
    it('should support in typescript', function () {
        function sayHello(name?: string | null) {
            if (name) {
                console.info(`Hello ${name}`);
            } else {
                console.info('Hello');
            }
        }

        sayHello('Syauqi');

        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});