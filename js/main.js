const quotes=[
    {
    quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    writer:`― Albert Einstein `
  },
  {
    quote:`“So many books, so little time.” `,
    writer:`― Frank Zappa `
  },
  {
    quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    writer:`― Albert Einstein `
  },
  {
    quote:`“A room without books is like a body without a soul.”`,
    writer:`― Marcus Tullius Cicero  `
  },
  {
    quote:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” `,
    writer:`― Dr. Seuss `
  },
  {
    quote:`“You only live once, but if you do it right, once is enough.”  `,
    writer:`  ― Mae West`
  },
  {
    quote:`“Be the change that you wish to see in the world.”  `,
    writer:`― Mahatma Gandhi`
  },
  {
    quote:`“To live is the rarest thing in the world. Most people exist, that is all.”`,
    writer:`― Oscar Wilde`
  },
  {
    quote:`“A friend is someone who knows all about you and still loves you.”`,
    writer:`― Elbert Hubbard`
  },
  {
    quote:`“We accept the love we think we deserve.” `,
    writer:`― Stephen Chbosky`
  },
  {
    quote:`“Without music, life would be a mistake.”`,
    writer:`― Friedrich Nietzsche`
  },
  {
    quote:`"You miss 100% of the shots you don't take."`,
    writer:`― Wayne Gretzy`
  },
  {
    quote:`"The best revenge is massive success."`,
    writer:`― Frank Sinatra`
  },
]

let btn=document.getElementById('btn');
let output=document.getElementById('output');
let writer=document.getElementById('writer');
btn.addEventListener("click",function(){
    let random=Math.floor(Math.random() * quotes.length);
    output.innerHTML= quotes[random].quote;
    writer.innerHTML= quotes[random].writer;

})








