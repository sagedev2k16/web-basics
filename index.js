console.log('Hello world in India');

// Variables
var a = 1; // Global scope
let b = 'Sumit';
const c = true;

// Data types
let a1 = -1.1; // Number - Integers or floating point numbers
let b1 = 'India'; // String
let c1 = true; // Boolean - true or false
let d1 = [1, 2, 3, 4, 5]; // Array
let address = {
    flatNo: 123,
    apartmentName: 'Royal Oak',
    streetName: '1st street',
    pincode: '303030',
    state: 'Delhi',
    isPrimary: true,
    members: ['Father', 'Mother', 'Daughter', 'Son'],
    phones: {
        primary: '+91-2087310273',
        secondary: '1-2973-1972-39'
    }
};

let emps = [
    {
        name: 'Name 1',
        id: '123',
        jd: '',
        desgination: '',
        orgUnit: ''
    }, // represents one employee
    {}, // represents another employee
];

let students = [
    {id: 1, name: 'Student 1', grade: 5, subjects: ['English', 'Maths', 'Science'], isPassed: true, marks: 50},
    {id: 2, name: 'Student 2', grade: 6, subjects: ['Computer', 'Chemistry', 'Maths'], isPassed: false, marks: 30},
    {id: 3, name: 'Student 3', grade: 8, subjects: ['Arts', 'Biology', 'Geography'], isPassed: true, marks: 80}
];

let obj = {
    'first name': 'ABC'
};

// Student 2 has got 30% marks in grade 6.

// let ans = students[1].name + ' has got ' + students[1].marks + '% marks in grade ' + students[1].grade;
// console.log('ans', ans);

// let stu = students[1];
// let ans2 = `${stu.name.toUpperCase()} has got ${stu.marks}% marks in grade ${stu.grade}`; // template strings

// console.log('ans2', ans2);

let val1 = '2';
let val2 = 2;

let g = 5;

// let o1 = {
//     a: 1
// };

// console.log('String O1', JSON.stringify(o1));

// let o2 = {
//     a: 1
// }
// console.log('String O2', JSON.stringify(o2));

// if(o1.a === o2.a) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// if(g < 2) {
//     console.log('Less than 2');
// } else if(g > 10) {
//     console.log('Greater than 10');
// } else {
//     console.log('Between 2 and 10');
// }

// let h = 'In progress'; // Draft, In progress, Completed, Cancelled

// switch (h) {
//     case 'Draft':
//         console.log('DRAFT');
//         // break;
    
//     case 'In progress':
//         console.log('IN PROGRESS');
//         // break;

//     case 'Completed':
//         console.log('COMPLETED');
//         // break;

//     case 'Cancelled':
//         console.log('CANCELLED');
//         break;

//     default:
//         console.log('Value is not found');
//         break;
// }

let state = 'Delhi';
let month = 'December';

let j = false;

// if(state === 'Delhi' && month === 'December') {
//     console.log('It is a cold day');
// } else {
//     console.log('Some weather info');
// }

// if(!j) {
//     console.log('J is true');
// } else {
//     console.log('J is false');
// }

// let n1 = 3;
// let n2 = 4;
// let n3 = 6;

// // if n1 > n2 and n2 > n3 --> n1
// // if n1 < n2 and n2 < n3 --> n3

// function test() {
//     return 'abc';
// }

// let num = n1 > n2 ? n1 : n2 > n3 ? n2 : 'Big: ' + n3;

// CONDITION ? VALUE IF TRUE : VALUE IF FALSE;

// console.log(num);

// function getPort() {
//     // call a REST API and get the port number from it
//     return;
// }

// let PORT = getPort() ?? 8080;

// console.log('PORT', PORT);

// let jjj = 0; // undefined, 0, ''

// if(jjj) { // TRUTHY or FALSY
//     console.log('JJJ is ok');
// } else {
//     console.log('JJJ is not ok');
// }

// // for loop
// for(let i = 0; i < students.length; i++) {
//     if(students[i].grade === 6) {
//         console.log(students[i]);
//         break;
//     }
// }

// let arr = [{
//     num: -1
// }];

// for(let i = 0; i < 5; i++) {
//     let o = {};
//     o.num = i;

//     arr.push(o);
// }

// console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i].num % 2 === 0) {
//         arr.splice(i, 1, {num: 'a'});
//     }
// }

// console.log(arr);

// while loop
// while(CONDITION) { // infinite loop
//     console.log('This is a while loop');
// }

// let u = 0;

// function sum(a, b) {
//     return {
//         'msg': '',
//         'status': 200
//     };
// }

// function sum(a, b, c) {

// }

function sayHello() {
    console.log('Hello');
}

// console.log(sum(1, 5).msg);
// sayHello();

function dbl() {
    console.log('I double clicked');
    create();
}

function create() {
    // Create a DIV element inside the parent DIV (id div1). Give it yellow background and text Hi.
    let div1 = document.getElementById('div1');
    console.log(div1);

    let newDiv = document.createElement('div');
    newDiv.style.backgroundColor = 'yellow';
    newDiv.innerHTML = '<span>Hi</span>';

    div1.appendChild(newDiv);
}

function addRows(evt) {
    console.log(evt);
    let tbody = document.getElementById('student-tbody');

    for(let i = 0; i < students.length; i++) {
        let tr = document.createElement('tr');

        let tdId = document.createElement('td');
        tdId.innerText = students[i].id;

        let tdName = document.createElement('td');
        tdName.innerText = students[i].name;

        tr.appendChild(tdId);
        tr.appendChild(tdName);

        tbody.appendChild(tr);
    }
}