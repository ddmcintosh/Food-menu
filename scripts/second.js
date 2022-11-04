"use strict"

window.onload = init;

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

    function init() {

        console.log("second.js");
        fillDropdown();
        const optionsList = document.getElementById("optionsList");
        optionsList.onchange   = OptionsListOnChange;

    }

    function fillDropdown() {
        //to create dropdown 
        const menuSelect = document.getElementById("optionsList");
        let selectMenuOption = document.createElement("option");
        selectMenuOption.value = "";
        selectMenuOption.textContent = " Select a menu option "
        menuSelect.appendChild(selectMenuOption);

        let menuLength = menu.length;
        for (let i = 0; i < length; i++) {
            let newOption = document.createElement("option");
            newOption.value = menu[i]
            newOption.textContent = menu[i].drinks, menu[i].entrees, menu[i].desserts;

            menuSelect.appendChild(newOption);
        }

    }
    function getDrinksFromMenu(menu, drinks) {
        let drinksCount = menu.length;
        for (let i = 0; i < drinksCount; i++) {
            if (menu[i].drinks == drinks) {
                return menu[i].drinks;
            }
        }
    }




selectMenuOption.value = "";
selectMenuOption.textContent = " Select an item ";
optionsList.appendChild(selectMenuOption);

let length = menu.length;
    

        // create the option menu
        let theOption = document.createElement("option");

        //set the text & value of the option I created 
        theOption.texContent = 
        theOption.value = 

        //append the option as a child 
        foodsList.appendChild(theOption);
    }







    let drinks1 = [];
    let entrees1 = [];
    let desserts1 = [];

    for (let value of menu) {
        drinks1.push(value.drinks);
        entrees1.push(value.entrees);
        desserts1.push(value.desserts);
    }


};

return menu;
