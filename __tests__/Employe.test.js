const Employee = require('../lib/Employee');

test("Can we pass a name argument into Employee class", () => {
    const name = "aaron"
    const employee = new Employee( name, "3", "aaron@mail.com");

    expect(employee.name).toBe(name);
})

test("Does getName() return the correct information", () => {
    const name = "aaron"
    const employee = new Employee( name, "3", "aaron@mail.com");

    expect(employee.getName()).toBe(name);
})