//var1ables
var fruit="mango";
var count="69";
var price= 100;
var total= price*count;
console.log(fruit,total)

//operators
var b=9
//increment
b++
console.log(b)
//decrement 
b--
console.log(b)
//pre&post increment and decrement how to use and dont
var c=++b
console.log(c)
var c=b--
console.log(c)

//data type
console.log(typeof(10.5)) 
console.log(typeof("name69")) //'typeof' used to find what type of data type

//functions
function sms()
{
    console.log("vanakam")
}
sms()

//exercise 1
var a=10;
var b=5;
 function add()
 {
    console.log(a+b);
 }
add()

//exercise 2
var factor="johnny"
var fplayer="Dhoni"
var fmovie="Bridge to terrabithiya"

function fav()
{
    console.log("favourite actor:"+factor)
    console.log("favourite player:"+fplayer)
    console.log("favourite movie:"+fmovie)
}
fav()
//parameters
function add (a,b)
{
    console.log(a+b)
}
add (10,59)

//exercise 1
function area(l,b)
{
    var a=l*b
    console.log("area is:"+a)
}
area(5,3)

//return
function add(a,b)
{
    var c=a+b
    return c
}
var total=add(10,10)
console.log(total)

//if else
if(true) //either "true" or "false" executed
{ 
    console.log("it's true")
}
else{
    console.log("it's false")
}

//exercise1
var bucketlist=true
if(bucketlist)
{
    console.log("you has to work for you dream even harder and be more discipline")
}
else{
    console.log("you just taking only, you're a shit")
}

//if else with operator
var season="summer"

if(season=="spring"){
    console.log("enjoy the blooming flower")
}
if(season=="summer"){
    console.log("Drink water be hydrate")
}
if(season=="fall"){
    console.log("colorful leaves")
}
if(season=="winter"){
    console.log("stay warm and keep your hands safe")
}

//exercise with logical operators 
var score=69
console.log('you scoe is:'+score)
if(score<=50)
{
    console.log('you need to improve nigga')
}
else if(score>50 && score<=70)
{
    console.log('good job nigger')
}
else if (score>70)
{
    console.log('are you winning')
}

//exercise 2 even or odd
var num=19
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(isEvenOrOdd(num))

//ecercise 3 vowel or consonant
let char="S"
function checkVowelOrConsonant(char) {
    // Convert the character to lowercase
    char = char.toLowerCase();

    // Check if the character is a vowel
    if ('aeiou'.includes(char)) {
        return "Vowel";
    } else {
        return "Consonant";
    }
}
console.log(checkVowelOrConsonant(char))

//for loop

for(i=0;i<=10;i=i+1)
{
    if (i % 2 === 0){
    console.log(i)
    }
    else{
        console.log("odd")
    }
    // console.log(i)
}
console.log()
for(i=10;i>=1;i=i-3)
{
    console.log(i)
}
//tables
for(i=1;i<=10;i=i+1){
    console.log(i+"X2="+i*2)
}

//generate random numbers with mat random and floor
console.log(Math.floor(Math.random()*10)+1)
