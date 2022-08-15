console.log(document);
console.log(document.getElementsByTagName('li'));

const liCollection = document.getElementsByTagName('li');
for (const li of liCollection) {
    console.log(li.innerText);
}