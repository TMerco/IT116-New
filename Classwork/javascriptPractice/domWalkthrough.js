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

// var items = document.getElementByClassName('list-group-item');

// console.log(items);
// console.log(items[1]);

// //Styling Property Attributes through the variable.
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'pink';
// items[1].textContent = 'CATS';
// items[1].style.color = 'green';

// items[0].textContent = "DOGS"
// items[0].style.fontWeight = 'bold';
// items[0].style.backgroundColor = 'red';
// items[0].textContent = 'Oooop - Coleman Love';
// items[0].style.color = 'white';


// for(var i = 0; i < li.length; i++){

//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = 'Changed Text'; 

////// QUERY SELECTOR//////

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px hotpink';
// // 
// var input = document.querySelector('input');
// input.value = "Changed The Input Box Text";
// // 
// var submit = document.querySelector("input[type='submit']");
// submit.value = "SEND"; 
// // 
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// // 
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'coral';

////////////////////////////////////////////////////////////////////

///////QUERY SELECTOR ALL///////////////////////

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello Tyrell';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');


//

for (var i = 0; i <odd.length; i++) {

    odd[i].style.backgroundColor = 'grey';
    even[i].style.backgroundColor = 'green';
    even[i].style.color = 'whitesmoke';
}

