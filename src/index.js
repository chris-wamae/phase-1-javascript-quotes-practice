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
            console.log(singleQuote["likes"])
        document.querySelector("ul#quote-list").append(quote)

      })
    });
}
renderQuotes();
