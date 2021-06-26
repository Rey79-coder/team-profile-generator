const Engineer = require('../lib/Engineer');

test('set github account', () => {
    const testValue = "github";
    const e = new Engineer('Foo', 1, "test@testing.com", testValue);
    expect(e.github).toBe(testValue);

});
  
test('getRole should return Engineer', () => {
    const testValue = "Engineer";
    const e = new Engineer('Foo', 1, "test@testing.com", 'github');
    expect(e.getRole()).toBe(testValue);

});


test('set getGithub function', () => {
    const testValue = "github";
    const e = new Engineer('Foo', 1, "test@testing.com", testValue);
    expect(e.getGithub()).toBe(testValue);

});
