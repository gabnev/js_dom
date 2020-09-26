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
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach((item, index) => {
  item.textContent = `${index}: Hello World`;
})

const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach((li) => {
  li.style.background = '#ccc';
})

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#eee';
}

console.log(items);