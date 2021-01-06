const { TestScheduler } = require('jest');
const Person = require('./Person');

test("What is your name?", () => {

    let person = new Person("Bobby", "Digital", 51, "M", "Making Phat Beats");
    let expected = "Bobby";
    let actual = person.name.firstName;

    expect(actual).toEqual(expected);
});

