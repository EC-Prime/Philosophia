function getTodaysQuote(){

    //get today's day
    const day = Math.floor(Date.now()/86400000);
    let index = day % quotes.length;
    let today = quotes[index];

   return today;
}

getTodaysQuote();