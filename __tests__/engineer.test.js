const Engineer = require('../lib/Engineer');

test("creates a new Engineer Object", () => {
    const engineer = new Engineer("jane", 1, "jane@gmail.com", "jyp1763");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining("@"));
    expect(engineer.github).toEqual(expect.any(String));
})
test("test if the getRole method returns the correct role data", () => {
    const engineer = new Engineer("jane", 1, "jane@gmail.com", "jyp1763");

    expect(engineer.getRole()).toEqual("Engineer");
})
test("test if the getGithub method returns the correct Github username data", () => {
    const engineer = new Engineer("jane", 1, "jane@gmail.com", "jyp1763");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})