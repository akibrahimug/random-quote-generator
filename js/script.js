/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Programming isn't about what you know; it's about what you can figure out.",
    source: 'Chris Pine',
    citation: 'Dev',
    year: '',
  },
  {
    quote: 'The only way to learn a new programming language is by writing programs in it.',
    source: ' Dennis Ritchie',
    citation: 'Dev',
    year: '',
  },
  {
    quote: "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
    source: 'Joyce Wheeler',
    citation: 'Dev',
    year: '',
  },
  {
    quote: 'In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.',
    source: 'Andrew Hunt',
    citation: 'Dev',
    year: '',
  },
  {
    quote: 'Testing leads to failure, and failure leads to understanding.',
    source: 'Burt Rutan',
    citation: 'Dev',
    year: '',
  },
  {
    quote: 'The best error message is the one that never shows up.',
    source: 'Thomas Fuchs',
    citation: 'Dev',
    year: '',
  },
  {
    quote: "The most damaging phrase in the language is.. it's always been done this way",
    source: 'Grace Hopper',
    citation: 'Dev',
    year: '',
  },
  {
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    source: 'Martin Fowler',
    citation: 'Dzone',
    year: '',
  },
  {
    quote: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away',
    source: 'Antoine de Saint-Exupery',
    citation: 'Dzone',
    year: '',
  },
  {
    quote: 'I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.',
    source: ' Bjarne Stroustrup',
    citation: 'Tech Source',
    year: '',
  }
];


/***
 * `getRandomQuote` function
***/

const getRandomQuote = (quote) => {
  const randomQuote = Math.floor(Math.random() * quote.length);
  return quote[randomQuote]
}

/***
 * `getRandomColor` function
***/

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255 );
  const g = Math.floor(Math.random() * 255 );
  const b = Math.floor(Math.random() * 255 );

  const rgb = `rgb(${r},${g},${b})`
  return rgb
}


/***
 * `printQuote` function
***/
const printQuote = () => {
  // Create a variable to hold the random array data
  const data = getRandomQuote(quotes)
  //structure the data to be injected into the document
  const quote = `
  <p class="quote">${data.quote}</p>
  <p class="source">${data.source}
  <span class="citation">${data.citation}</span></p>`
  
  //Select the DOM elements to replace
  const quoteBox = document.getElementById('quote-box')
  quoteBox.innerHTML = quote
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);