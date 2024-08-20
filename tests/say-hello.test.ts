import { sayHello } from "../src/say-hello";

describe('sayHello', function(): void{
    it("should say hello syauqi", function(): void{
        expect(sayHello('Syauqi')).toBe("Hello Syauqi");
    })
})