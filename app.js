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
    date.textContent = "TODAY"+ " - " + getTodayString().toLocaleUpperCase();

    let todayQuote = document.querySelector('.quote-block .quote');
    todayQuote .textContent = quote.text;

    let author = document.querySelector('.quote-block .author');
    author.textContent = quote.author;
}

let saveBtn =document.querySelector('.save-btn');
let Reflection =document.querySelector('#reflection-input');

function handleSave(){
    let reflectToday = Reflection.value;

       let entry = {
            reflection: reflectToday,
            quoteId: quote.id,
            date: getTodayString()
        };

  console.log(entry);

    let entries = getEntries();
    entries.push(entry);
    localStorage.setItem("entries", JSON.stringify(entries));
    Reflection.value = "";
    renderHistory();
    
}

function getEntries() {
  let retrieveQ = localStorage.getItem("entries");
  if (retrieveQ === null) {
    return [];
  } else {
    return JSON.parse(retrieveQ);
  }
}
saveBtn.addEventListener('click', handleSave);

function renderHistory(){
    let entries = getEntries();
    const list = document.querySelector(".prev-quotes");
    list.innerHTML = "";

    if(entries.length === 0){
      list.textContent = "No entries yet."  
      return;
    }
    
    for(let entry of entries){
        let matchedQuote =  quotes.find(q => q.id === entry.quoteId);

        let row = document.createElement("div");
        row.className = "prev-quote"; // or whatever class you want each row to have

        let quoteText = document.createElement("p");
        quoteText.className = "quote";
        quoteText.textContent = matchedQuote.text;

        let footer = document.createElement("div");
        footer.className = "card-footer";

        let authorText = document.createElement("p");
        authorText.className = "author";
        authorText.textContent = matchedQuote.author;

        let dateText = document.createElement("p");
        dateText.className = "date";
        dateText.textContent = entry.date;

        footer.appendChild(authorText);
        footer.appendChild(dateText);

        row.appendChild(quoteText);
        row.appendChild(footer);

        list.appendChild(row);

        let reflectionText = document.createElement("p");
        reflectionText.className = "reflection";
        reflectionText.textContent = entry.reflection;
        row.appendChild(reflectionText);

        row.addEventListener("click", function() {
          row.classList.toggle("expanded");
        });
       


    }
}

const getTodayString = () =>{
  return new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}
const quote = getTodaysQuote();
renderTodayCard(quote);
renderHistory();

