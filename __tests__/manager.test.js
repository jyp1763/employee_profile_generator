const Manager = require('../lib/teamManager');

test("creates a new Manager Object", () => {
    const manager = new Manager("jane", 1, "jane@gmail.com", 704-222-2222);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})
test("test if the getRole method returns the correct role data", () => {
    const manager = new Manager("jane", 1, "jane@gmail.com", 704-222-2222);

    expect(manager.getRole()).toEqual("Manager");
})

