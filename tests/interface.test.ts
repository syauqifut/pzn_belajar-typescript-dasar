import { Employee, Manager } from "../src/extend-interface";
import { Seller } from "../src/interface";
import { Person } from "../src/person";

describe('Interface', function () {
    it('should support in typescript', function () {
        const seller: Seller = {
            id: 1,
            name: 'Toko ABC',
            nib: '1234567890',
            npwp: '1234567890',
            // address: 'Indonesia'
        };

        seller.name = 'Toko XYZ';
        // seller.nib = '123456789';
        console.info(seller);
    });

    it('should support interface', function () {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };

        console.info(add(1, 2));

        expect(add(1, 2)).toBe(3);
    });

    it('should support indexable interface', function () {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ['Anto', 'Sujono', 'Budi'];
        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
    });

    it('should support interface function for non number index', function () {
        interface StringDictionary {
            [index: string]: string;
        }

        const dictionary: StringDictionary = {
            'name': 'Anto',
            'address': 'Indonesia'
        };

        console.info(dictionary['name']);
        console.info(dictionary['address']);

        expect(dictionary['name']).toBe('Anto');
        expect(dictionary['address']).toBe('Indonesia');
    });

    it('should support extend interface', function () {
        const employee: Employee = {
            id: 1,
            name: 'Anto',
            division: 'IT'
        };

        console.info(employee);

        const manager: Manager = {
            id: 2,
            name: 'Durjana',
            division: 'IT',
            numberOfEmployee: 10
        };

        console.info(manager);
    });

    it('should support function in interface', function () {
        const person: Person = {
            name: 'Anto',
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };

        console.info(person.sayHello('Budi'));
    });

    it('should support intersection types', function () {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: number;
        }

        // interface Person extends HasName, HasId {
        // }

        type Domain = HasName & HasId;

        const domain: Domain = {
            name: 'Anto',
            id: 1
        };

        console.info(domain);
    });

    it('should support type assertion', function () {
        const person1: any = {
            name: 'Yahud',
            age: 20
        };

        const person2: Person = person1 as Person;
        // person2.sayHello('Budi');

        console.info(person2);
    });
});