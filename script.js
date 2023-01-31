const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
/* Question 1 */

const cat = {complain: function myfunction() {
    return "Meow!";
}
}
console.log(cat.complain());

/* Question 2 */

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

/* Question 3 */

heading.style.fontSize="2em";

/* Question 4 */

heading.className +="subheading";

/* Question 5 */

const paragraphs = document.querySelectorAll("p");
for ( i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red"
}

/* Question 6 */

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = '<p>New Paragraph</p>';
resultsContainer.style.backgroundColor = "yellow";

/* Question 7 */

function mylist(list) {
    for ( i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
mylist(cats)

/* Question 8 */
let html ="";
let listItem ="";
let listItem2 ="";
let container = document.querySelector(".cat-container");

function createCats(cats) {
    for ( i = 0; i < cats.length; i++){
    missingAge = "Age unknown";
    if (!cats[i].age) {
        cats[i].age = missingAge;
    }
    listItem = `<h5>${cats[i].name}</h5>`;
    listItem2 = `<p>${cats[i].age}</p>`; 
    html += "<div>" + listItem + listItem2 + "</div>";    
    }
    return html;  
}
container.innerHTML = container.innerHTML + createCats(cats);