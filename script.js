// Smooth scroll effects
function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}
function scrollToPortfolio(x) {
  if (x.matches) { // If media query matches
    window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
  }
  else if (y.matches) {
    window.scroll({ top: 1800, left: 0, behavior: 'smooth' });
  }
  else {
    window.scroll({ top: 1500, left: 0, behavior: 'smooth' });
  }
}
function scrollToContact(x) {
  window.scroll({ top: 15000, left: 0, behavior: 'smooth' });
}

const x = window.matchMedia("(max-width: 600px)");
const y = window.matchMedia("(max-width: 1025px)");


$(document).ready(function () {
  // Typewritter effect
  const words = ['Web developer...', 'Student...', 'Problem solver...', 'Planner...', 'Beer drinker...', 'Hiker...', 'List checker...'];
  const typeEffectEl = document.querySelector('#type-effect');
  let letterIndex = 0;
  let wordIndex = 0;

  initTyping();

  function initTyping() {
    if (wordIndex < words.length) {
      window.setTimeout(() => {
        typeEffectEl.innerHTML = '';
        letterIndex = 0;
        printLetters(words[wordIndex]);
      }, 1000);
    }
    else {
      wordIndex = 0;
      initTyping();
    }
  }

  function printLetters(word) {
    window.setTimeout(() => {
      if (letterIndex < word.length) {
        typeEffectEl.innerHTML += word[letterIndex];
        letterIndex++;
        printLetters(word);
      } else {
        wordIndex++;
        initTyping();
      }
    }, 100);
  }
});

