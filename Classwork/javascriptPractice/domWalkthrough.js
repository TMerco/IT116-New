// //console.dir(document);
// console.log(document.domain); //<---shows IP address
// console.log(document.URL);

// // access the title element
// console.log(document.title);

// // check the doc type (HTML)
// console.log(document.doctype);

// //can see everything in the "head"
// console.log(document.head);
// //document Object model can scan the tree for elements
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// //GetElementById.
// console.log(document.getElementById("header-title"));

// //Creation of an object variable using the document function.
// let headerTitle = document.getElementById('header-title');

// headerTitle.textContent = "Im Changing the Header"

// headerTitle.style.color = "hotpink";
////////////////////////////////////////////////////
/////////////GetElementByClassName//////////////////

var items = document.getElementBy className('list-group-item');

console.log(items);
console.log(items[1]);

items.[1].textContent = "Dogs"

items.[1].style.fontWeight = "bold"