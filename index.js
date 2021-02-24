window.onload = function(){
//arreglos
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
//nueva frases
let who2 = Math.floor((Math.random() * adj.length) );
let action2 = Math.floor((Math.ramdom() * action.length) );
let what2 = Math.floor((Math.ramdom() * what2.length) );
let when2 = Math.floor((Math.ramdom() * when2.length) );

index.querySelector('#excuse').innerHTML = who[who2] + action[action2] + what[what2] + when[when2];


}