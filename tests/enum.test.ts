import { Customer, customerType } from "../src/enum";

describe('Enum', function () {
    it('should support in typescript', function () {
        const customer: Customer = {
            id: 1,
            name: 'Syauqi',
            type: customerType.GOLD
            // type: customerType.MYTHICAL_GLORY
        };

        console.info(customer);
    });
});