console.log("Hi! Welcome to My Portfolio Site!");

function menuToggle() {
  // change the class of the menu so it shows menu links on onClick

  var x = document.getElementById('myNavToggle');
  if (x.className === 'navtoggle') // if the classn name of x is navtoggle, add responsive to the class name, else leave it alone
    x.className += ' responsive'; // this will show the menu
  else
    x.className = 'navtoggle'; // this will hide the menu
};
