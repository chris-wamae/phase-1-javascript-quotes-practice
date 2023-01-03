// function that populate the page with quotes from the local server
function renderQuotes() {
  //fetches qutotes from the API
  fetch("http://localhost:3000/quotes?_embed=likes")
    .then((response) => response.json())
    .then(function (quotesObject) {
      //adds quotes to the page
      console.log(quotesObject);
      quotesObject.forEach(function(){
        let quote = document.createElement("li")
        quote.setAttribute("class","quote-card")
        quote.innerHTML = 
        `<blockquote class='blockquote'> 
             <p class='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p> 
                 <footer class='blockquote-footer'>Someone famous</footer>
                 <br> 
                     <button class='btn-success'> Likes: 
                        <span>0</span> </button>
                     <button class='btn-danger'>Delete</button>
            </blockquote>`;
        document.querySelector("ul#quote-list").append(quote)

      })
    });
}
renderQuotes();
