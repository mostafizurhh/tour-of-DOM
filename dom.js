// console.log(document); /* get the HTML file as an object. */
// console.log(document.getElementsByTagName('li'));

const liCollection = document.getElementsByTagName('li'); /* get element by Tag name like h1,li,ul,p etc. */
for (const li of liCollection) {
    // console.log(li.innerText); /* get inner content of en element */
}

// console.log(document.getElementById('kheda').innerText);
/* get element by ID name and querySelector has the same function but the difference is for querySelector we need to follow css style rules like querySelector(#idName or .classname) */
const Title = document.getElementById('kheda');
Title.innerText = 'Kheda Lagse';
Title.style.backgroundColor = 'yellow';
Title.style.textAlign = 'center';
Title.setAttribute('Title', 'tooltip added'); //will work as a tooltip when mouse hover.
// Title.classList.add('bgColor');
// Title.classList.remove('bgColor');

// console.log(title.innerText);

// console.log(document.getElementsByClassName('paragraph')[0].innerText = 'hello hi how are you?'); /* get element by class name, [0]--> to get only the first element */
/* get element by class name, [0]--> to get only the first element */

/* to get all elements and modify it by class name we need to run a for loop and need to use a variable*/
const pTitles = document.getElementsByClassName('paragraph');
for (let pTitle of pTitles) {
    pTitle.innerText = 'amra akhon o vat khai ni. aita kono kotha???';
    // console.log(pTitle);
}

/* to get elements by querySelector, need to write the id or class name exactly like css file. Ex: getElementBySelector(#idname or .classname) ==> it wil give only the 1st element. To get all the element we need to use querySelectorAll(#idname or .classname) and need to run a for loop like getElementByClassName.*/


/* to see nodelist --> need to provide an id */
const checkNode = document.getElementById('busyman');

const domde = document.getElementsByClassName('dom');
// console.log(domde);

const section3 = document.getElementById('thirdsection');
console.log(section3);
console.log(section3.childNodes);

/* 1. where to add child -> 1st give the same ID to the parent */
const Append = document.getElementById('Append');
/* 2. what to add */
const division = document.createElement('section');
division.innerText = 'how are you?'
division.style.border = '3px solid blue';
/* 3. add the child */
Append.appendChild(division);

/***************** Adding a section *************/

/* where to add */
// const Append = document.getElementById('Append');

/* what to add */
const section = document.createElement('section');
/* elements of section */
const h1 = document.createElement('h1');
h1.innerText = 'WOW';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'pani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'khabo';
ul.appendChild(li2);

section.appendChild(ul);

/* add child */
Append.appendChild(section);

/***************** Adding a section DIRECTLY *************/
/* where to add */
// const Append = document.getElementById('Append');

/* what to add */
const anotherSection = document.createElement('section');
anotherSection.innerHTML = `
<h1>Darun bapar holo</h1>
<p style = "color:green;">Tumi amar jibon, ami tomar jibon</p>
<ul>
    <li>directly</li>
    <li>append</li>
    <li>kora</li>
    <li>hoise</li>
</ul>
`
anotherSection.style.color = 'blue';

Append.appendChild(anotherSection);


/* to select all sections and modify styles */
const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.backgroundColor = 'lightblue';
    section.style.border = '3px solid green';
    section.style.borderRadius = '10px';
    section.style.margin = '10px';
    section.style.paddingLeft = '10px';
}