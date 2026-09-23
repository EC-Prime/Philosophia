function getTodaysQuote(){

    //get today's day
    const day = Math.floor(Date.now()/86400000)+10;
    let index = day % quotes.length;
    let today = quotes[index];

   return today;
}

function renderTodayCard(quote){
    let date = document.querySelector('.quote-block .date');
    date.textContent = "TODAY, 27 AUGUST 2026";

    let todayQuote = document.querySelector('.quote-block .quote');
    todayQuote .textContent = quote.text;

    let author = document.querySelector('.quote-block .author');
    author.textContent = quote.author;
}

const quote = getTodaysQuote();
renderTodayCard(quote);