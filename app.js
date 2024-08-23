//variable

let newQuote = document.querySelector(".button");
// let quotes = document.querySelector(".new-quote");
let person = document.querySelector(".person-quote");
let quoteBox = document.querySelector(".quote-box");

const quotesCollection = [
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    person: "William Butler Yeats",
  },
  {
    quote: "The best way to predict your future is to create it.",
    person: "Peter Drucker",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    person: "Albert Einstein",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    person: "Albert Schweitzer",
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote: "Success is not in what you have, but who you are.",
    person: "Bo Bennett",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    person: "Steve Jobs",
  },
  {
    quote: "The harder the conflict, the greater the triumph.",
    person: "George Washington",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    person: "Charles R. Swindoll",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    person: "Walt Whitman",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius",
  },
  {
    quote:
      "Failure is simply the opportunity to begin again, this time more intelligently.",
    person: "Henry Ford",
  },
  {
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
    person: "Roy T. Bennett",
  },
  {
    quote:
      "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    person: "Zig Ziglar",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "It is never too late to be what you might have been.",
    person: "George Eliot",
  },
  { quote: "If you can dream it, you can do it.", person: "Walt Disney" },
  {
    quote: "Act as if what you do makes a difference. It does.",
    person: "William James",
  },
  {
    quote: "Do not let what you cannot do interfere with what you can do.",
    person: "John Wooden",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    person: "C.S. Lewis",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    person: "Vidal Sassoon",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    person: "Thomas Jefferson",
  },
  {
    quote: "If opportunity doesn’t knock, build a door.",
    person: "Milton Berle",
  },
  {
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    person: "Joshua J. Marine",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    person: "Sam Levenson",
  },
  {
    quote: "Start where you are. Use what you have. Do what you can.",
    person: "Arthur Ashe",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    person: "Winston Churchill",
  },
];

let count = 0;

function updateQuote() {
  const quotestr = quotesCollection[count];
  //   console.log("quotestr", quotestr);
  const quoteElement = ` <p class="new-quote">
              ${quotestr.quote}
              </p>
              <p style="color: yellow" class="person-quote"
                >${quotestr.person}</p
              >`;
  quoteBox.innerHTML = quoteElement;
}

newQuote.addEventListener("click", () => {
  count = count + (1 % quotesCollection.length);
  updateQuote();
});
updateQuote();

// easiest method

newQuote.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotesCollection.length);
  quote.innerText = quotesCollection[random].quote;
  person.innerText = quotesCollection[random].person;
});

/*newQuote.addEventListener("click", function () {
  //   e.preventDefault();
  count++;

  if (count >= quotesCollection.length) {
    count = 0; // or you could use count = count % quotesCollection.length;
  } else {
    updateQuote();
  }*/
