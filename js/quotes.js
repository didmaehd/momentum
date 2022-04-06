const quotes = [
{
    quotes:"Dream as if you'll live forever. Live as if you'll die today.",
    author:"James Dean",
},
{
    quotes:"Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    author:"St. Jerome",
},
{
    quotes:"It always seems impossible until it's done.",
    author:"Nelson Mandela",
},
{
    quotes:"Life is 10% what happens to you and 90% how you react to it.",
    author:"Charles R. Swindoll",
},
{
    quotes:"When something is important enough, you do it even if the odds are not in your favor.",
    author:"Elon Musk",
},
{
    quotes:"It does not matter how slowly you go as long as you do not stop.",
    author:"Confucius",
},
{
    quotes:"Everything has beauty, but not everyone sees it.",
    author:"Confucius",
},
{
    quotes:"If you fell down yesterday, stand up today.",
    author:"H. G. Wells",
},
{
    quotes:"A will finds a way",
    author:"Orison Swett Marden",
},
{
    quotes:"If you can dream it, you can do it.",
    author:"Walt Disney",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quotes
author.innerText = todaysQuote.author
