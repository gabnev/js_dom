// document object properties
let val;
val = document;
val = document.all;
val = document.all[0];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contenType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

// trying to use forEach on document.script
let scripts = document.scripts;

// converting to array
let scriptsArr = Array.from(scripts);

scriptsArr.forEach((script) => {
  console.log(script);
  console.log(script.getAttribute('src'));
})

console.log(val);