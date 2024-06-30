1. The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie{
    constructor(title, studio, rating){
        this.title = title
        this.studio = studio
        this.rating = rating
    }
    getPG(){
        return `The movie title is ${this.title} the studio is ${this.studio} and the rating for the movie is ${this.rating}`;
    }
    }
    var film = new Movie("Casino Royale", "Eon Productions", "PG­13");
    console.log(film.getPG());

2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle{
constructor(radius, color){
    this.radius = radius
    this.color = color
}
printcolor(){
    return `The radius of circle is ${this.radius} and color is ${this.color}`;
}
}
var area = new Circle(1.0, "red");
console.log(area.printcolor());

3. Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age,occupation,role,gender,birth,place) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
    this.role = role;
    this.gender = gender;
    this.birth = birth;
    this.place = place;
    }
    get FirstName() {
        return this.firstName;
    }
    get LastName() {
        return this.lastName;
    }
    get Age() {
        return this.age;
    }
    get Occupation() {
        return this.occupation;
    }
    get Role() {
        return this.role;
    }
    get Gender() {
        return this.gender;
    }
    get Birth() {
        return this.birth;
    }
    get Place() {
        return this.place;
    }
    set FirstName(firstName) {
        this.firstName = firstName;
    }
    set LastName(lastName) {
        this.lastName = lastName;
    }
    set Age(age) {
        this.age = age;
    }
    set Occupation(occupation) {
        this.occupation = occupation
    }
    set Role(role) {
        this.role = role;
    }
    set Gender(gender) {
        this.gender = gender;
    }
    set Birth(birth) {
        this.birth = birth;
    }
    set Place(place) {
        this.place = place;
    }
}
var details = new Person("Jaison","Jeba","25","Developer","Full stack devloper","male","23.11.1997","Devakottai");
console.log(details);

4. write a class to calculate the Uber price.

class Uber{

    constructor(price,distance){
        this.price= price;
        this.distance= distance;
 
    }
    get Price() {
        return this.price;
    }
    set Price(price){
        this.price=price;
    }
    get Uberdistance(){
        this.distance=distance;
}
set Uberdistance(distance){
    this.distance=distance;
}
    get Uberprice() {
        return this.distance*this.price;
    }
}
var calc = new Uber(80,8);
console.log(calc.Uberprice);
