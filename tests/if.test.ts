describe('If statement', function() {
    it('should support in typescript', function() {
        const examValue = 90;
        
        if (examValue > 80) {
            console.info('Good');
        } else if (examValue > 60) {
            console.info('Not bad');
        } else {
            console.info('Try again');
        }
    });

    it('should support ternary operator', function() {
        const examValue = 90;

        const say = examValue >= 80 ? 'Congratulation' : 'Try Again';
        console.info(say);
    });

    it('should support switch statement', function() {
        function sayHello(name: string): string {
            switch (name) {
                case 'Budi':
                    return 'Hi Budi';
                case 'Sujatmi':
                    return 'Hi Sujatmi';
                default:
                    return 'Hello';
            }
        }

        console.info(sayHello('Budi'));
        console.info(sayHello('Sujatmi'));
        console.info(sayHello('Eko'));
    });
});