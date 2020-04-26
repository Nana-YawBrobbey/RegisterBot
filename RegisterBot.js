//instructions
//open cmd 
//npm init
//npm install opn
//npm install request
//cd until you reach the folder this is saved in (probs downloads)
//node registerbot.js
var i = 0
const pauselen = 120000
var document = "https://learning.alleyns.org.uk/set-tasks/68426"
nodelist=[]

var request = require ('request');
request ({
    uri: "https://learning.alleyns.org.uk/set-tasks/68426",

}, function(error, reponse, body){
    console.log(body);
});

function openwebpage(){    
    const opn = require('opn');
    opn('https://learning.alleyns.org.uk/set-tasks/68426','Google Chrome');
}
openwebpage()

//make a way to search through the html code for the latest task 
//tortoise and hare search algorithm
//isolate the 5 digit id number at the end of the string
//add that number to the openwebpage function
//find a way to either:
//  open a css file that clicks the button
//or 
//  clicks the button through the node.js code.

function sleep2(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  } 
 
  async function pagechangerefresh() {
    await sleep(pauselen);
  
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
      if (i === 3)
        await sleep(pauselen);
      console.log(i);
    }
    }
// day len= 86400000
//min len= 60000

function simulateClick() {
  //document.getElementById('Mark as Done').click();
  for (var i = 0; i < 30; i++) {
    nodelist.append(document.getElementsByClassName("button"))
    console.log(nodelist[i])
  } 
  console.log(nodelist.length)
  //nodeList[2].click()    
}
simulateClick()

var bbcode = require('bbcode');
bbcode.parse('[b]text[/b]',
 function(content) {  
})
