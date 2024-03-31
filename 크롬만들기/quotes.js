const quotes = [
{
    quote : "Life is what happens when you're busy making other plans",
    author : "John lennon",
},
{
    quote : "2번째 명언 어쩌고",
    author : "2-1작가",
},
{
    quote:"3번쨰 명언임다",
    author:"3-1작가임다",
},
{
    quote:"4다",
    author:"4-1다",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// console.log(quotes[0]);
const todaysQuote = quotes [Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;