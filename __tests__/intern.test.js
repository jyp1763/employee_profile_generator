const Intern = require('../lib/Intern');

test("creates a new Intern Object", () => {
    const intern = new Intern("jane", 1, "jane@gmail.com", "msu");

    expect(intern.school).toEqual(expect.any(String));
})


//test if the getRole method returns the correct role data
test("test if the getRole method returns the correct role data", () => {
    const intern = new Intern("Tom", 1, "tom@gmail.com", "msu");

    expect(intern.getRole()).toEqual("Intern");
})
