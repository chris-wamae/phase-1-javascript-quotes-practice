// function that populate the page with quotes from the local server
function renderQuotes() {
  //fetches qutotes from the API
  fetch("http://localhost:3000/quotes?_embed=likes")
    .then((response) => response.json())
    .then(function (quotesObject) {
      //adds quotes to the page
      console.log(quotesObject);
      quotesObject.forEach(function(singleQuote){
        let quote = document.createElement("li")
        quote.setAttribute("class","quote-card")
        quote.innerHTML = 
        `<blockquote class='blockquote'> 
             <p class='mb-0'>${singleQuote["quote"]}</p> 
                 <footer class='blockquote-footer'>${singleQuote["author"]}</footer>
                 <br> 
                     <button class='btn-success'> Likes: 
                        <span>0</span></button>
                     <button class='btn-danger'>Delete</button>
            </blockquote>`;
            console.log(singleQuote)
        document.querySelector("ul#quote-list").append(quote)

      })
    });
}
renderQuotes();

function addQuote(){
//listens for a submission of the form
document.querySelector("form#new-quote-form").addEventListener("submit",function(event){
  //prevents the form from refreshing the page
event.preventDefault()
//get the data that is entered when the form is submitted
let newQuote = document.querySelector("input#new-quote").value
let quoteAuthor = document.querySelector("input#author").value
// Submitting the form creates a new quote and adds it to the list of quotes without 
// having to refresh the page. Pessimistic rendering is recommended.
//creates a new quote object for the server
let newQuoteObject = {}
newQuoteObject["quote"] = newQuote
newQuoteObject["author"] = quoteAuthor
newQuoteObject["likes"] = []
//sends a POST request with the new quote object to the server
fetch("http://localhost:3000/quotes",{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(newQuoteObject)
})
//renders the quote on the page
renderQuotes()
})
}addQuote()

