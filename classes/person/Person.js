

class Person{
    constructor (firstName, lastName, age, gender, interests){
        this.name = { firstName, lastName};
        this.age = age;
        this.gender = gender;
        this.interests = interests;
}
        get Question() {
           let response = "What is your name?" + this.name.firstName;
           return response;
        }

}
let newPerson = new Person("Bobby")



/*Person.prototype.greeting = function(){
    let response = "Hi, my name is " + this.name.firstName;
    return response;
}

Person.prototype.bio = function(){
    let pronoun = "";
        if (this.gender.charAt(0).toLowerCase() === "m"){
        pronoun += "he";
    } else {
        pronoun += "she";
    }

    let newInterests = "";
        if (typeof this.interests !== "string") {
            newInterests = this.interests.join(", and ");
       } else {
            newInterests = this.interests;
       }

       let stringOut = `This persons name is ${this.name.firstName} ${this.name.lastName} and ${pronoun} is ${this.age} years old. ${pronoun.charAt(0).toUpperCase() + pronoun.slice(1)} likes ${newInterests}`
            return stringOut;
            */

module.exports = Person;