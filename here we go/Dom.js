var para = document.getElementById("pa")
console.log(para.textContent)
para.textContent = "hi"


function change() {
    var content = ['Hii', 'Random string', 'shuffle', 'here we go', 'num', 'Baby, Bye Bye Bye...', 'learn & grow', 'got to go', 'nahi']
    var random = Math.floor(Math.random() * content.length)
    title.textContent = content[random]
}

function add() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var total = num1 + num2;

    result.textContent = "The total is: " + total + " " + "is this right?";
}

var sco = 10
function match() {
    var no = (Math.floor(Math.random() * 10) + 1)
    console.log(no)
    var ans = document.getElementById("guess").value
    if (no == ans) {
        output.textContent = "you're right"
        alert("you got it...")
    }
    else {
        sco = sco - 1
        score.textContent = "Aura:" + sco
        output.textContent = "you're wrong"
    }
}


function task() {
    point.textContent = inputbox.value
}

function words() {
    var par = document.createElement('h1')
    par.textContent = "IDK"
    var contain = document.getElementById("container")
    contain.append(par)
}

giga.addEventListener('click', () => {
    if (giga.style.backgroundColor = 'white') {
        giga.style.backgroundColor = 'black'
        giga.style.color = 'white'
    } else {
        giga.style.backgroundColor = 'white'
        giga.style.color = 'black'
    }
});

/* var above=document.getElementById('above')
var one=document.getElementById('one').value
var two=document.getElementById('two').value
var three=document.getElementById('three').value

function show(num){
    if(num==1){
        above.textContent=one
    }
    else if(num==2){
        above.textContent=two
    }
    else{
        above.textContent=three
    }
} */


function show(event) {
    above.textContent = event.target.textContent
    /* console.log(event) */
}

function deleting(event) {
    event.target.remove()
}

var ul = document.getElementById('list-item')
var input = document.getElementById('todolist')
function ntask() {
    var li = document.createElement("li")
    li.innerHTML = input.value + "<button onclick='sala(event)'> delete </button>"
    ul.append(li)
}

function sala(event) {
    event.target.parentElement.remove()
}

// var uname = document.getElementById('name').value
// var age = document.getElementById('age').value
// var course = document.getElementById('course').value
// var gender = document.getElementById('gender').value
// var email = document.getElementById('email').value


/* var uname = document.getElementById('name')
var nakku = uname.value
var age = document.getElementById('age')
var course = document.getElementById('course')
var gender = document.getElementById('gender')
var email = document.getElementById('email')

function transfer() {
    console.log("name:" + nakku)
} */

/* var inputname = document.getElementById("name");
var inputage = document.getElementById("age");
var inputcourse = document.getElementById("course");
var inputgender = document.getElementById("gender");
var inputemail = document.getElementById("email");
var inputsave = document.getElementById("save");

inputsave.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {

    }
});

var content = [];

function handleform() {
    var namevalue = inputname.value;
    var agevalue = inputage.value;
    var coursevalue = inputcourse.value;
    var genderValue = inputgender.value;
    var emailvalue = inputemail.value;

    content.push({
        name: namevalue,
        age: agevalue,
        course: coursevalue,
        gender: genderValue,
        email: emailvalue
    })

    HandleForeach(content)
} */


/* function HanldeForeach(value) {
    var sasa = document.createElement('td')
    var tr = document.getElementById('pp')
    value.forEach(element => {
        sasa.textContent=element.name
        sasa.textContent=element.age
        sasa.textContent=element.course
        sasa.textContent=element.gender
        sasa.textContent=element.email
    });
    tr.append(sasa)
} */
/* function HandleForeach(value) {
    value.forEach(element => {
      var sasa = document.createElement('td');
      sasa.textContent = element.name;
      var tr = document.getElementById('pp');
      tr.appendChild(sasa);
  
      sasa = document.createElement('td');
      sasa.textContent = element.age;
      tr.appendChild(sasa);
  
      sasa = document.createElement('td');
      sasa.textContent = element.course;
      tr.appendChild(sasa);
  
      sasa = document.createElement('td');
      sasa.textContent = element.gender;
      tr.appendChild(sasa);
  
      sasa = document.createElement('td');
      sasa.textContent = element.email;
      tr.appendChild(sasa);
    });
  } */

var inputname = document.getElementById("name");
var inputage = document.getElementById("age");
var inputcourse = document.getElementById("course");
var malegender = document.getElementById("male");
var femalegender = document.getElementById("female");
var inputemail = document.getElementById("email");
var inputsave = document.getElementById("save");

inputsave.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        handleform();
    }
});

var content = [];

function handleform() {
    var namevalue = inputname.value;
    var agevalue = inputage.value;
    var coursevalue = inputcourse.value;
    var maleValue = malegender.value;
    var femaleValue = femalegender.value;
    var genderValue = null;
    var emailvalue = inputemail.value;

    if (malegender.checked) {
        genderValue = 'male'
    }
    else {
        genderValue = 'female'
    }
    content.push({
        name: namevalue,
        age: agevalue,
        course: coursevalue,
        gender: genderValue,
        email: emailvalue
    });

    HandleForeach(content);
    content = []; // Clear content to prevent re-adding previous entries
}

function HandleForeach(value) {
    value.forEach(element => {
        var tr = document.createElement('tr'); // Create a new table row

        var tdName = document.createElement('td');
        tdName.textContent = element.name;
        tr.appendChild(tdName);

        var tdAge = document.createElement('td');
        tdAge.textContent = element.age;
        tr.appendChild(tdAge);

        var tdCourse = document.createElement('td');
        tdCourse.textContent = element.course;
        tr.appendChild(tdCourse);

        var tdGender = document.createElement('td');
        tdGender.textContent = element.gender;
        tr.appendChild(tdGender);

        var tdEmail = document.createElement('td');
        tdEmail.textContent = element.email;
        tr.appendChild(tdEmail);

        document.getElementById('pp').appendChild(tr); // Append the row to the table
    });
}

let myButton = document.querySelector("#change");
let myHeading = document.querySelector("h6");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `UserName, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `UserName, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};



