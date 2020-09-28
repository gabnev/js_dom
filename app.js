// // document object properties
// let val;
// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contenType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// // trying to use forEach on document.script
// let scripts = document.scripts;

// // converting to array
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach((script) => {
//   console.log(script);
//   console.log(script.getAttribute('src'));
// })

// console.log(val);

// console.clear();

// // single element selectors
// console.log(document.getElementById('task-title'));

// //getting id & class from selected element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // STYLE
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';

// // Make something disappear
// // document.getElementById('task-title').style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';

// //insert HTML
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// //querySelector
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// console.clear();

// // Multiple Elements
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'green';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color = 'green';
// lis[3].textContent = 'Hello';

// lis = Array.from(lis);
// lis.reverse();
// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index}: hello`;
// })

// console.log(lis);

// querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach((item, index) => {
//   item.textContent = `${index}: Hello World`;
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd');
// const liEven = document.querySelectorAll('li:nth-child(even');

// liOdd.forEach((li) => {
//   li.style.background = '#ccc';
// })

// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#eee';
// }

// console.log(items);

// console.clear();

//traverse the dom - move up & down
// let val;
// const list = document.querySelector('ul');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// get child nodelist - the text item is just the line breaks in the html
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// above, the nodeType returns a number. The list bellow show the meanings

//1 - element
//2 - attribute (deprecated)
//3 - text node
//8 - comment
//9 - document itself
//10 - Doctype

// get only children nodes - return html collection, no text
// val = list.children;
// val = list.children[1].textContent = 'hello';
// val = list.children[0].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

// console.clear();

// // creating elements

// const li = document.createElement('li');

// // add lass
// li.className = 'collection-item';

// // add id
// li.id = 'new-item';

// // add attribute
// li.setAttribute('title', 'New Item');

// //create text node & append
// li.appendChild(document.createTextNode('List item'));

// create new link element
// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = '<i class="fa fa-remove"></i>';
// li.appendChild(link);

//append li as child to ul
// document.querySelector('ul').appendChild(li);

// console.log(li);

// console.clear();

//replace elements

// const newHeading = document.createElement('h2');

// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// const oldHeading = document.querySelector('#task-title');

//getting the parent
// const cardAction = document.querySelector('.card-action');

//replacing
// cardAction.replaceChild(newHeading, oldHeading);

//remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();
// // or
// list.removeChild(lis[3]);

//classes and attributes
// const firstLi = document.querySelector('li:first-child');
// const aTag = firstLi.children[0];

// let val;

// val = aTag.className;
// val = aTag.classList;
// val = aTag.classList[0];
// aTag.classList.add('test');
// aTag.classList.remove('test');
// val = aTag;

//Attributes
// val = aTag.getAttribute('href');
// val = aTag.setAttribute('href', 'http://google.com');
// aTag.setAttribute('title', 'google');
// val = aTag.hasAttribute('title');
// val = aTag.removeAttribute('title');


// console.log(lis[0].innerHTML);

console.clear();

// event listener

// document.querySelector('.clear-tasks').addEventListener('click', (event)=> {
  
//   console.log('hello');
//   event.preventDefault();

// });


// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(event){
//   event.preventDefault();
//   let val;

//   val = event;
//   val = event.target;
//   val = event.target.id;
//   val = event.target.className;
//   val = event.target.classList;

//   val = event.target.innerText= 'hello';

//   val = event.type;

//   val = event.timeStamp;

//   val = event.clientY;
//   val = event.clientX;
//   val = event.offsetY;
//   val = event.offsetX;

//   val = event.offsetX;

//   console.log(val);
// }

console.clear();

// mouve events

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // clearBtn.addEventListener('click', runEvent);
// // clearBtn.addEventListener("dblclick", runEvent);
// clearBtn.addEventListener("mousedown", runEvent);
// clearBtn.addEventListener("mouseup", runEvent);
// //mouseenter and leave only fire up when entering the MAIN element
// card.addEventListener("mouseenter", runEvent);
// card.addEventListener("mouseleave", runEvent);
// //mouseover and out fireup when dealing with any element
// card.addEventListener("mouseover", runEvent);
// card.addEventListener("mouseout", runEvent);

// card.addEventListener("mousemove", runEvent);




// function runEvent(e) {
//   console.log(`Event type: ${e.type}`)
//   e.preventDefault();
//   heading.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX / e.offsetY})`;
// }

// keyboard events

// const form = document.querySelector('form');
// const taskInput = document.querySelector('#task');
// const heading = document.querySelector('h5');

// taskInput.value = '';

// // form.addEventListener('submit', runEvent);

// // taskInput.addEventListener('keydown', runEvent);
// // taskInput.addEventListener('keyup', runEvent);
// // taskInput.addEventListener('keypress', runEvent);

// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('copy', runEvent);
// taskInput.addEventListener('paste', runEvent);
// //any kind off event from the user
// taskInput.addEventListener('input', runEvent);
// //change - when a change occurs in the select tag
// taskInput.addEventListener('change', runEvent);

// function runEvent(event){
//   console.log(`Event type: ${event.type}`)
//   console.log(event.target.value);
//   // heading.innerText = event.target.value;
//   // event.preventDefault();
//   // console.log(taskInput.value);
// }

console.clear();

// event bubbling

// document.querySelector('.card-title').addEventListener('click', () => {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', () => {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', () => {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', () => {
//   console.log('col');
// });

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem (event){
//   // if(event.target.parentElement.classList === 'delete-item'){
//   //   console.log('delete');
//   // }
//   if(event.target.parentElement.classList.contains('delete-item')){
//     console.log('delete');
//     event.target.parentElement.parentElement.remove();
//   }
// }

// local storage
// session storage is deleted once the browser is closed
// set local storage item - persists until mannually deleted
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

//set session storage
// sessionStorage.setItem('name', 'Barbs');

//remove from storage
// localStorage.removeItem('name');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener
('submit', (event) => {
  
  const task = document.querySelector('#task').value;
  
  let tasks;
  
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
  tasks.push(task);
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved');
  
  event.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task) => {
  console.log(task);
})
