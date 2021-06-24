const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('set Office number', () => {
    const testValue = "100";
    const e = new Manager('Foo', 1, "test@testing.com", testValue);
    expect(e.officeNumber).toBe(testValue);

});

test('set getRole function should return Manager', () => {
    const testValue = "Manager";
    const e = new Manager('Foo', 1, "test@testing.com", 100);
    expect(e.getRole()).toBe(testValue);

});

test('set getOffice function', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, "test@testing.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);

});