describe('Function', function () {
    it('should support in typescript', function () {
        function sayHello(name: string):string {
            return `Hello ${name}`;
        }

        expect(sayHello('Yahud')).toBe('Hello Yahud');

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello('Yahud');
    });

    it('should support default value', function () {
        function sayHello(name: string = 'Guest'): string {
            return `Hello ${name}`;
        }

        expect(sayHello()).toBe('Hello Guest');
        expect(sayHello('Yahud')).toBe('Hello Yahud');
    });

    it('should support rest parameter', function () {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support optional parameter', function () {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            } else {
                return `Hello ${firstName}`;
            }
        }

        expect(sayHello('Yahud')).toBe('Hello Yahud');
        expect(sayHello('Yahud', 'Kurniawan')).toBe('Hello Yahud Kurniawan');
    });

    it('should support function overloading', function () {
        function callMe(value: number): void;
        function callMe(value: string): void;
        function callMe(value: any): any {
            if (typeof value === 'number') {
                return value * 5;
            } else if (typeof value === 'string') {
                return value.toUpperCase();
            }
        }

        expect(callMe(10)).toBe(50);
        expect(callMe('Yahud')).toBe('YAHUD');
    });

    it('should support function as parameter', function () {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpperCase(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello('Anto', toUpperCase)).toBe('Hello ANTO');

        expect(sayHello('Anto', function (name: string): string {
            return name.toUpperCase();
        })).toBe('Hello ANTO');

        expect(sayHello('Anto', (name: string): string => {
            return name.toUpperCase();
        })).toBe('Hello ANTO');
    });
});