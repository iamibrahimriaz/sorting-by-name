var myColleagues = [];

function addNewItem(e) {
    // Get the input box and the current colleaguelist
    var inputBox = document.getElementById("newColleagueName");
    var colleagueslist = document.getElementById("myColleagues");
  
    // Create a new colleaguelist item and add it to the colleagueslist
    var newColleague = document.createElement("li");
    newColleague.innerText = inputBox.value;
    colleagueslist.appendChild(newColleague);
  
    // Clear the input box
    inputBox.value = "";

    myColleagues.push(newColleague.innerText);
}

function sortbyName() {
    var sortedColleaguelist = document.getElementById("sortedColleagues");
    sortedColleaguelist.innerHTML= "";
    const nameGroup = myColleagues.reduce((acc, cur) => {
        const firstLetter = cur[0].toUpperCase();
        if(firstLetter in acc) {
            acc[firstLetter].push(cur);
        } else {
            acc[firstLetter] = [cur];
        }
        return acc;
    }, {});
    
    Object.keys(nameGroup).forEach((groupKey) => {
        var newColleague = document.createElement("li");
        newColleague.classList.add("title");
        newColleague.innerText = groupKey;
        sortedColleaguelist.appendChild(newColleague);

        nameGroup[groupKey].forEach((name) => {
            var newColleague = document.createElement("li");
            newColleague.innerText = name;
            sortedColleaguelist.appendChild(newColleague);
        });
    
    });
}


var addNewColleague = document.getElementById("addNewColleague")
var removeColleagues = document.getElementById("removeColleagues")
var sortColleagues = document.getElementById("sortColleagues")


addNewColleague.addEventListener('click', function () {
    addNewItem();
    sortbyName();
});

removeColleagues.addEventListener('click', function () {
    var colleagueslist = document.getElementById("myColleagues");
    var sortedColleaguelist = document.getElementById("sortedColleagues");

    colleagueslist.innerHTML= "";
    sortedColleaguelist.innerHTML= "";
});

