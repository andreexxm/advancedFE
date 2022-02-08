// Base types in TS
//number
//string
//bool
//any : it can be ANYTHING (wildcard)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var id = 1;
id = 2; //valid
//id="random string" ->> has our back
var userName = "John";
var randomValue;
randomValue = 1;
randomValue = "2";
console.log(userName);
//ARRAYS
var randomNumbers = [1, 234, 776];
randomNumbers.push(20);
var ids = [1, 2, "3"];
//TUPLES -specified element types
var pplTuple = [1, 'George', true];
//ENUMS
var Seasons;
(function (Seasons) {
    Seasons["AUTUMN"] = "autumn";
    Seasons["SUMMER"] = "summer";
    Seasons["SPRING"] = "spring";
    Seasons["WINTER"] = "winter";
})(Seasons || (Seasons = {}));
var studentChoice = "summer"; // user input
if (studentChoice === Seasons.SUMMER) {
    console.log("mm very warm mmm");
}
var firstUser = {
    id: 1,
    name: 'Max',
    birth: {
        birthDate: new Date().toDateString(),
    },
};
var secondUser = {
    id: 2,
    name: "Olga",
    lastname: "Penovska",
    birth: {
        birthDate: "25.06.1993"
    },
};
var users = [firstUser, secondUser];
var randomNut = 'hazlenut';
//TYPE ASSERTION
var someName = "Random Name";
var secondName = someName;
var thirdUser = {}; //  go prezema type-ot
function returnFullName(firstName, lastName, age) {
    return firstName + " " + lastName + " " + age;
}
//return type is indicated at the front
//parameter types are indicated at the front in ()
console.log(returnFullName("Max", "Andreevska", 20));
var returnFullNameSecond = function (props) {
    var firstName = props.firstName, lastName = props.lastName, age = props.age;
    return firstName + " " + lastName + " " + age;
};
console.log(returnFullNameSecond({ firstName: 'Maxx', lastName: "Andreevska", age: 20 }));
var personTwo = {
    firstName: 'Gorge',
    lastName: 'Dimitrov'
};
console.log(returnFullNameSecond(personTwo));
//Interface
var AnimalDiet;
(function (AnimalDiet) {
    AnimalDiet["CARNI"] = "carnivore";
    AnimalDiet["OMNI"] = "omnivore";
    AnimalDiet["HERB"] = "herbivore";
})(AnimalDiet || (AnimalDiet = {}));
//void can only be overewritten with a type
var dog = {
    name: 'Cody',
    breed: 'Golden',
    age: 10,
    diet: AnimalDiet.OMNI,
    random: function (randomText) {
        return randomText;
    },
};
console.log(dog.random('ete taka nekako, ne skontav bas ali nema veze'));
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greeting = function (greeting) {
        if (greeting === void 0) { greeting = "Hello World"; }
        return greeting;
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Man;
}(Person));
var firstMan = new Man();
console.log(firstMan.greeting('Hi from the other side'));
