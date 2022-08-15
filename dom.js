console.log(document);
console.log(document.getElementsByTagName('li'));

const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    // console.log(li.innerText);
}

// console.log(document.getElementById('kheda').innerText);
const title = document.getElementById('kheda');
title.innerText = 'Kheda Lagse';
// console.log(title.innerText);

// console.log(document.getElementsByClassName('paragraph'));
const pTitles = document.getElementsByClassName('paragraph');
for (let pTitle of pTitles) {
    pTitle.innerText = 'amra akhon o vat khai ni. aita kono kotha???';
    console.log(pTitle);
}

