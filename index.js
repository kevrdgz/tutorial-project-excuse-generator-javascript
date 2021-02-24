window.onload = function(){
//arreglos
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
//nueva frases
let who2 = Math.floor((Math.random() * who.length) );
let action2 = Math.floor((Math.random() * action.length) );
let what2 = Math.floor((Math.random() * what.length) );
let when2 = Math.floor((Math.random() * when.length) );

document.querySelector('#excuse').innerHTML = who[who2] + " " + action[action2] + " " + what[what2] + " " + when[when2];


}