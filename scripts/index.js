"use strict"

const menu = {
    drinks : [
    "Water", "Tea", "Sweet Tea",
    "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees : [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate"
    ],
    desserts: [
    "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
    };

window.onload = function() {
//load the dropdown list 
initMenuDropdown();
const optionsList = document.getElementById("optionsList")
const foodsList = document.getElementById("foodsList")
optionsList.onchange = optionsListOnChanged;

};


function initMenuDropdown() { //create Dropdown

    let selectedValue = optionsList.value;
    if (selectedValue == "drinks") {
        for (let value of menu.drinks) {
            let theOption = document.createElement("option");
            option.textContent = value;
            option.value = value;
            foodsList.appendChild(theOption);
        }
        foodsList.style.display = "block"
    }

    else if (selectedValue == "entrees") {
        for (let value of menu.entrees) {
            let option = document.createElement(theOption);
            option.textContent = value;
            option.value = value;
            foodsList.appendChild(theOption)
        }
        foodsList.style.display = "block"
    }
   
else if (selectedValue == "desserts") {
    for (let value of menu.desserts) {
        let option = document.createElement(theOptions);
        option.textContent = value;
            option.value = value;
            foodsList.appendChild(theOption);
    }
    foodsList.style.display = "block";
}

else {
    foodsList.style.display = "none";
}
return foodsList;
}

function optionChanged () {
    foodsList.options.length = 0;
    initMenuDropdown();
}


