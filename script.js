function scrollToTop() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}
function scrollToPortfolio(x) {
  if (x.matches) { // If media query matches
    window.scroll({ top: 1800, left: 0, behavior: 'smooth' });
    }
  else {
    window.scroll({ top: 1100, left: 0, behavior: 'smooth' });
  }
} 
function scrollToContact(x) {
  if (x.matches) { // If media query matches
    window.scroll({ top: 3600, left: 0, behavior: 'smooth' });
  }
  else {
    window.scroll({ top: 2100, left: 0, behavior: 'smooth' });
  }
}


var x = window.matchMedia("(max-width: 600px)");