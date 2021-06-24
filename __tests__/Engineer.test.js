const Engineer = require('../lib/Engineer');

test('set GitHub account', () => {
    const testValue = "GitHubUser";
    const e = new Engineer('Foo', 1, "test@testing.com", testValue);
    expect(e.github).toBe(testValue);

});
  
test('getRole should return Engineer', () => {
    const testValue = "Engineer";
    const e = new Engineer('Foo', 1, "test@testing.com", 'GitHubUser');
    expect(e.getRole()).toBe(testValue);

});


test('set getGithub function', () => {
    const testValue = "GitHubUser";
    const e = new Engineer('Foo', 1, "test@testing.com", testValue);
    expect(e.getGithub()).toBe(testValue);

});