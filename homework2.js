//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

//Exercise #1 answer is as follows

function favFoods(something) {
    let differentThing = Object.entries(something)
    for (let [key, value] of differentThing){
        if (typeof value[0] === 'object'){
            let somethingElse = Object.entries(value[0]);
            somethingElse.forEach( (somethingElse) => 
            console.log(`If it's ${key} from ${somethingElse[0]} they'll take a ${somethingElse[1]}.`))
        } else if( typeof value == 'string'){
            console.log(`It it's ${key} they'll take ${value}.`)
        } else if (Array.isArray(value)) {
            console.log(`If it's ${key} they'll take ${value.join(" or ")}.`)
        }
    }
}

favFoods(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;
    



// Use an arrow to create the printInfo method

this.printInfo = () => {
    console.log(`Their name is ${this.name} and their age is ${this.age}`);
}

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

this.addAge = () => {
    this.age++
}

}

let firstPerson = new Person('David-28', 1000)
let secondPerson = new Person('Shaw', 36)

firstPerson.printInfo()
secondPerson.printInfo()

firstPerson.addAge()
firstPerson.addAge()
firstPerson.addAge()

firstPerson.printInfo()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// Although not requested I also included the boolean value along with 'Big word' or 'Small Number'

const bigOrSmall = (s) => {
    return new Promise ( (resolve, reject) => {
        if(s.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

bigOrSmall('asdfghtreja')
.then( (result) => {
    console.log(`Big word ${result}`)
})
.catch( (error) => {
    console.log(`Small Number ${error}`)
})
