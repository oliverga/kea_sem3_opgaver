"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function Animal(name, desc, type, age) {
    this.name = name;
    this.desc = desc;
    this.type = type;
    this.age = age;
}


function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        // TODO: Create new object with cleaned data - and store that in the allAnimals array
        
        let name = jsonObject.fullname.split(" ")[0];
        let desc = jsonObject.fullname.split(" ")[2];
        let type = jsonObject.fullname.split(" ")[3];
        let age = jsonObject.age;
        let animal = new Animal(name, desc, type, age);
        
        allAnimals.push( animal );

    });

    displayList();
}

function displayList() {
    // clear the list
    console.log(allAnimals);
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


