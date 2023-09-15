// 1 => Define a variable to store the famous person's name
var famous_person:string  = "Allama Iqbal";

// Define a variable to store the quote
var quote:string = "The ultimate aim of the ego is not to see something,but to be something.";

// Compose the message using template literals
var message: string =`${famous_person} once said that:,"${quote}"`;

// USe console.log to print the message
console.log(message);

//___________________________________________________________________________________________________________________________

// 2 => compose a personal message 
var tabish:string = "Hello Eric, would you like to learn some Python today?";
console.log(tabish);

//___________________________________________________________________________________________________________________________

// 3 =>compose message in upper,lower or title case
var upper_case:string = "Snow White and the Seven Dwarves.";
console.log(upper_case);

//___________________________________________________________________________________________________________________________

// 4 =>Do add,sub.multi,div but Answer will be 8
var num1:number = 2;
var num2:number = 4;
var num3:number = 56;
var num4:number = 7;
var num5:number = 108;
var num6:number = 100;

var addition:number = num1+num1+num1+num1;
console.log("The addition result is:",addition);

var multiplication:number = num2*num1;
console.log("The multiplication result is:",multiplication);

var division:number = num3/num4;
console.log("The division result is:",division);

var subtraction:number = num5-num6;
console.log("The subtraction result is:",subtraction);

//___________________________________________________________________________________________________________________________

// 6=> Write a person's Quote
   
var fav_person:string = "Albert Einstein";
var quote_2:string = "A person who never made a mistake never tried anything new.";
var message_2:string = `${fav_person} once said that: "${quote_2}"`;
console.log(message_2);

//___________________________________________________________________________________________________________________________


// 8 => You should create four lines that look like this console.log(5+3),
// your out put should simply be four lines with the number 8 appearing once on each line.

console.log(2+2+2+2);
console.log(4*2);
console.log(56/7);
console.log(108-100);

//___________________________________________________________________________________________________________________________


// 9 => compose message in our fav number
var num7:number = 28;
var message:string = "My favourite number is: ";
var result:string =`${message} "${num7}"`;
console.log(result);

//___________________________________________________________________________________________________________________________


// 10 => Adding comments:

/* (In his program we write sentence in uper and lower case letters)*/
var upper_case:string = "Snow White and the Seven Dwarves.";
console.log(upper_case);

//___________________________________________________________________________________________________________________________



// 11 => compose friends name in arrary
var names:string[]= ['Hamza','Yasir','Faizan','Fazeel'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]); 

//___________________________________________________________________________________________________________________________


// 12 => compose message to friend in array
// This is my first code which I thought
var names:string[]= ['Hamza','Yasir','Faizan','Fazeel'];
var message:string ="HELLO kesy ho bahi jan.";
console.log(names[0] ,message);
console.log(names[1] ,message);
console.log(names[2] ,message);
console.log(names[3] ,message); 

//  Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.

var names: string[] = ["Ali Abdullah","Zartash Sharf", "Abdul Rashid","Tabish almas","Zahid Irfan", "M Javed"];
for (var i=0;i<names.length;i++){
  var Message = `Hello, ${names}! I hope you're having a great day.`;
 console.log(Message);
}


//___________________________________________________________________________________________________________________________


// 14 => compose a guest list to inviteon dinner
var guest:string = "Obviosly I would like to invite living persons on dinner.";

var guest_names:string[] = ['Rana','Hassan','Danish','Tabish','Muazzam','Arslan','Fazeel','Adeel Muratza','Naveed'];

var invite:string=":Hello my dear, I would like to invite you with your family on dinner at my home.It will glad moment if you come.";

console.log(guest_names[0] ,invite);
console.log(guest_names[4] ,invite);
console.log(guest_names[6] ,invite);


// 15 =>
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

console.log(`${guest_names[2]} is not availabe`);
guest_names.splice(guest_names.indexOf("Naveed"),1 ,"Danish Almas");
console.log(guest_names);


// 16 =>
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Original guest list
 guest_names.unshift("Hassan Murtaza");
 guest_names.splice(2,0,"Arslan Zafar");
 guest_names.push("Naveed")
 console.log(guest_names);


//___________________________________________________________________________________________________________________________

// 13 => Think of your favorite mode of transpotation such as car and print a message e.g("I would like to own honda car")

let car1 = {
    company:"HOnda",
    isused:false,
    year:2020
};

let car2 ={
    company:"Toyota",
    isused:true,
    year:2021
};
let car3 = {
    company:"kia",
    isused:false,
    year:2022
};
let car4 = {
    company:"BMW",
    isused:false,
    year:2023
};


type type_of_cars = {company:string,isused:boolean,year:number};
let cars:type_of_cars[]=[car1,car2,car3,car4,];

console.log(cars);

//___________________________________________________________________________________________________________________________

// 20 =>
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.

 let country:string[]=["Pakistan","india","Afganistan","Iran","Sudia Arabia","Iraq",];
 for (var index = 0; index < country.length; index++) {
     console.log(country[index]);
 }

 //___________________________________________________________________________________________________________________________

 // 21 =>
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
  var itemObject={
   Name:"Tabish Almas",
   Age:18,
   isStudent:true,
 };
 console.log(itemObject);

//___________________________________________________________________________________________________________________________


 // Question number=22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 var fruits: string[] = ["apple", "banana", "orange","pineapple","strawberry"];
 console.log(fruits[3]);
 var index = 2;
 if (index >= 0 && index < fruits.length) {
 }


//___________________________________________________________________________________________________________________________

// 28 =>
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.

 var age: number = 55;

 if (age< 2 ){
     console.log(`The person is a baby`)
 }
 if (age >= 2 && age < 4 ){
     console.log(`The person is a toddler`)
 }
 if (age >= 4 && age < 13 ){
     console.log(`The person is a kid`)
 }
 if (age >= 13 && age < 20 ){
    console.log(`The person is a teenager`)
 }
 if (age >= 20 && age < 65 ){
     console.log(`The person is an adult`)
 }
 if (age > 65 ){
     console.log(`The person is elder`)
 }

 //______________________________________________________