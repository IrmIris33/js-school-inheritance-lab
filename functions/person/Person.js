/**
 * Creating the objects constructor, and setting the objects state
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} age 
 * @param {*} gender 
 * @param {*} interests 
 */
function Person(firstName, lastName, age,gender, interests){
    this.name = { firstName, lastName};
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function(){
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
 
}
      
    // Step 01 First define a string, and make it equal to the part of
    // the bio that we know will always be the same.
    // first name, lastname and age:
    // This persons name name is Bobby Digital, and I am 51 years old.
    // Add all of that to the varaiable you create called stringOut;

    //Step 02 check what the value of gender is and set the pronoun to the approriate case
    // example input for pronoun for a man can be [Male, male, M, m] set the value of a variable called pronoun to 'He likes'
    // exmaple input for pronoun for a female can be [Female, female, F, f] set the value of a variable called pronoun to 'She likes'

    //step 03 add the pronoun to a variable called stringOut;

    // step 04 if interest is an array then add to string all of the interest stringOut

    // step 05 return stringOut

    /**
     * This persons is name is Bobby Digital and I am 51 years old.
     * He likes making Phat beats, and Ill Rhymes
     */


/**
 * This is a behavior provided by node, that allows for us to create a 
 * connection between class and functions defined in diffent files
 */

module.exports = Person;