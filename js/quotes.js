const quotes = [
{
    quotes:"何が嫌いかより何が好きかで自分を語れよ。",
    author:"ワンピース　ルフィ",
},
{
    quotes:"お前に出来ねえ事は俺がやる。俺に出来ねえ事をお前がやれ！",
    author:"ワン・ピース　サンジ",
},
{
    quotes:"他人にやらされてた練習を努力とは言わねえだろ。",
    author:"メジャー　茂野五郎",
},
{
    quotes:"常に今日は明日の準備です。今日やったことは必ず明日に返ってくるんです。",
    author:"俳優　水谷豊",
},
{
    quotes:"楽しくやる。自然にやる。無理に大きく見せない。これが一番。",
    author:"ネプチューン　原田泰造",
},
{
    quotes:"勉強するから、何をしたいかわかる。勉強しないから、何をしたいか分からない。",
    author:"ビートたけし",
},
{
    quotes:"本気でやらないと、本気で笑えないんだよ。",
    author:"江頭２：５０",
},
{
    quotes:"If you fell down yesterday, stand up today.",
    author:"H. G. Wells",
},
{
    quotes:"そひょんはとっても大切なまま、ぱぱの娘なんだよ！",
    author:"まま、ぱぱ",
},
{
    quotes:"まま、ぱぱの娘で生まれてくれてありがとう！",
    author:"まま、ぱぱ",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quotes
author.innerText = todaysQuote.author
