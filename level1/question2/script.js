// Get the element containing the todo cards
var myList = document.getElementById("cards");

// New Request object for the JSON with todos
var requestURL = "https://jsonplaceholder.typicode.com/todos";
var request = new XMLHttpRequest();

// Open connection and get the JSON list 
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var todo = request.response;
    // call function to populate the HTML
    populateCards(todo);
}


function populateCards(todoCards) {

    // loop through the TODO cards
    for (var i = 0;i < todoCards.length; i++) {
     
        // main card element
        var cardElement = document.createElement('div');
        cardElement.className = "card text-center";
       
        // card content
        var cardContent = document.createElement('div');
        cardContent.className = "card-block";
        cardElement.appendChild(cardContent);

        // card title
        var cardTitle = document.createElement('h4');
        cardTitle.className = "card-title";
        cardTitle.textContent = "TODO #" + todoCards[i].id;
        cardContent.appendChild(cardTitle);

        // card text content
        var cardText = document.createElement('p');
        cardText.className = "card-text";
        cardText.textContent = todoCards[i].title;
        cardContent.appendChild(cardText);

        // todo status
        var cardFooter = document.createElement('div');
        cardFooter.className = "card-footer";
        cardFooter.style.color = "White";

        // Set text and background color on status
        if (todoCards[i].completed) {
            cardFooter.style.backgroundColor = "Green";
            cardFooter.textContent = "Completed by User: "+ todoCards[i].userId;
        } else {
            cardFooter.style.backgroundColor = "Orange";
            cardFooter.textContent = "Not Completed by User: "+ todoCards[i].userId;
        }

        cardElement.appendChild(cardFooter);

        // Append the Card to the main card element
        myList.appendChild(cardElement);
    }
}