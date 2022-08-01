/** 
 * method to get a reference to HTML element 
 * 
 * getELementById - returns a single element with the mathcing id
 * getElementsBYClassName - returns a list of elements with the matching class name
 * 
 * querySelector - use CSS sleector and return the first mathch
 * querySelectorAll - use CSS selectors and return a list of match
 * 
*/

// get a reference to the element with the id  pf #one 
let heading = document.getElementById("one");
console.log(heading);

//tells us all props and methods
console.dir(heading);

heading.style["background-color"] = "#ff0000";

//get a reference to all elements with the class title
let allHeadings = document.getElementsByClassName("title");
console.log(allHeadings);

/**
 * PSEUDO CODE
 * for I in allHeadings
 * change I to color:green;
 * 
 */
let colors = ["#00ff00", "#0000ff", "#00ffff", "#ff00ff"];
for (let i = 0; i < allHeadings.length; i++){
    // select a random idx
    let randomColor = Math.random(); //(0, 1)
    randomColor = randomColor * colors.length; //(0, 4)
    randomColor = Math.floor(randomColor);

    allHeadings[i].style["color"] = colors[randomColor];
}


let heading2 = document.querySelector("#one");
heading2.innerHTML = " My last name is Zheng ";

let allHeadings2 = document.querySelectorAll("h1");
for ( let i = 0; i < allHeadings2.length; i++){
    allHeadings2[i].style["font-size"] = "4em";
}

//get a ref to th ebutton with the id of background-button
let button = document.getElementById("background-button");

// set the onclick prop to an anonymous function
button.onclick - function(){
    let divContainer = document.querySelector("#container");
    divContainer.style["background-color"] = "EEEE38";
}
