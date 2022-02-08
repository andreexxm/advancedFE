// Base types in TS
//number
//string
//bool
//any : it can be ANYTHING (wildcard)

let id: number =1;
id=2 //valid
//id="random string" ->> has our back

let userName: string = "John";

let randomValue: any;
randomValue = 1;
randomValue = "2";

console.log(userName);

//ARRAYS

const randomNumbers: number[] = [1,234,776];
randomNumbers.push(20);

const ids: (string|number)[] = [1,2,"3"]

//TUPLES -specified element types
let pplTuple: [number, string, boolean] = [1,'George', true];

//ENUMS
enum Seasons{
    AUTUMN = "autumn",
    SUMMER = "summer",
    SPRING = "spring",
    WINTER = "winter",
}

let studentChoice = "summer" // user input
if (studentChoice === Seasons.SUMMER) {
    console.log("mm very warm mmm");
}

//OBJECTS
type User = {
    id: number;
    name: string;
    birth: Birth;
};

type Birth = {
    birthDate: string | Date;
}

type Users = {
    users: User []
}

const firstUser: User = {
    id:1,
    name: 'Max',
    birth:{
        birthDate: new Date().toDateString(),
    },
};

const secondUser = {
    id:2,
    name:"Olga",
    lastname:"Penovska",
    birth: {
        birthDate : "25.06.1993"
    },
}

const users: User [] = [firstUser, secondUser]



type NutsType = 'walnut' | 'hazlenut' | 'peanut';
const randomNut: NutsType = 'hazlenut';


//TYPE ASSERTION
let someName: any = "Random Name"
let secondName = someName as string;

const thirdUser: User = {} as User; //  go prezema type-ot


//FUNCTIONS

type PersonInformation = {
    firstName: string;
    lastName: string;
    age?: number;
}


function returnFullName(
    firstName: string, 
    lastName: string, 
    age: number
    ): string {
    return `${firstName} ${lastName} ${age}`
}
 //return type is indicated at the front
 //parameter types are indicated at the front in ()
 console.log(returnFullName("Max","Andreevska",20));

const returnFullNameSecond = (props:PersonInformation): string => {
    const {firstName, lastName, age} = props;
    
    return `${firstName} ${lastName} ${age}`;
};

console.log(returnFullNameSecond({firstName:'Maxx', lastName: "Andreevska", age: 20}));

const personTwo: PersonInformation = {
    firstName: 'Gorge',
    lastName: 'Dimitrov'
}

console.log(returnFullNameSecond(personTwo));

//Interface

enum AnimalDiet {
    CARNI = 'carnivore',
    OMNI = 'omnivore',
    HERB = "herbivore",
}

interface Animal {
    name: string;
    breed: string;
    age: number;
    diet: AnimalDiet;
    random(text: string): void;
}

//void can only be overewritten with a type

const dog: Animal = {
    name: 'Cody',
    breed: 'Golden',
    age: 10,
    diet: AnimalDiet.OMNI,
    random(randomText: string) {
        return randomText;
    },
};

console.log(dog.random('ete taka nekako, ne skontav bas ali nema veze'));

interface IPerson {
    name: string;
    lastName: string
}

interface IGreeting {
    greeting(greeting:string): string
}

class Person implements IPerson, IGreeting {
    name: string;
    lastName: string;

    greeting(greeting: string = "Hello World"){ return greeting;
    }
}


class Man extends Person {  
}

const firstMan = new Man()
console.log(firstMan.greeting('Hi from the other side'));
