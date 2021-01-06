const { TestScheduler } = require('jest');
const Person = require('./Person');

test("What is your name?", () => {

    let person = new Person("Bobby", "Digital", 51, "M", "Making Phat Beats");
    let expected = "Bobby";
    let actual = person.name.firstName;

    expect(actual).toEqual(expected);
});

test("Greeting" , () => {
    let person = new Person("Bobby", "Digital", 51, "M", "Making Phat Beats");
    let expected = "Hi, my name is Bobby";
    let actual = person.greeting();
    expect(actual).toEqual(expected);
});

test("Bio" , () => {
    let person = new Person("Bobby", "Digital", 51, "M", ["Making Phat Beats", "Ill Rhymes"]);

    let expected = "This persons name is Bobby Digital and he is 51 years old. He likes Making Phat Beats, and Ill Rhymes";
    
    let actual = person.bio();

    expect(actual).toEqual(expected);
});

test("Array of interests" , () => {
    let person = new Person("Bobby", "Digital", 51, "M", ["Making Phat Beats", "Ill Rhymes"]);

    let expected = "This persons name is Bobby Digital and he is 51 years old. He likes Making Phat Beats, and Ill Rhymes";
    
    let actual = person.bio();

    expect(actual).toEqual(expected);
});
