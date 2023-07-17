document.addEventListener("DOMContentLoaded", getQuote);

document.getElementById("new-quote-btn").addEventListener("click", getQuote);

function getQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      const quote = data.quote;
      const author = data.author;

      document.getElementById("quote").textContent = `"${quote}"`;
      document.getElementById("author").textContent = `— ${author}`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
