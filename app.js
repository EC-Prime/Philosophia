function getTodaysQuote(){

    //get today's day converting milliseconds to days
    //remainder of day/ length of the array gives us an a valid index number to work 
    const day = Math.floor(Date.now()/86400000);
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

let saveBtn =document.querySelector('.save-btn');
let Reflection =document.querySelector('#reflection-input');

function handleSave(){
    let reflectToday = Reflection.value;

       let entry = {
    reflection: reflectToday,
    quoteId: quote.id,
    date: "27 August 2026"
  };

  console.log(entry);
}

saveBtn.addEventListener('click', handleSave);