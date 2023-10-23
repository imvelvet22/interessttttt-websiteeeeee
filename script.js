document.addEventListener("DOMContentLoaded", function () {
  const sidemenu = document.getElementById("sidemenu");
  const menuButton = document.getElementById("menuButton");
  const closeButton = document.getElementById("closeButton");
  const navMenu = document.querySelector('nav ul');
// sidemenu, close menu, menuButton, navMenu are the variables are declared and assigned to specific elements 
  
  function openmenu() { // for opening the side menu when called.
    sidemenu.style.right = "0"; // sidemenu element to "0," effectively bringing the menu into view from the right side.
    closeButton.style.display = "block"; // Show the close button
    menuButton.style.display = "none"; // Hide the menu button
    navMenu.classList.add('show-menu'); // to apply some CSS styling or animation to show the menu.
  }

  function closemenu() { // for closing the side menu when called.
    sidemenu.style.right = "-200px"; //  This hides the menu
    closeButton.style.display = "none"; // Hide the close button
    menuButton.style.display = "block"; // Show the menu button
    navMenu.classList.remove('show-menu'); // hide any styling or animations associated with the open menu.
  }

  menuButton.addEventListener('click', openmenu); // When the "menuButton" is clicked, it calls the openmenu() function to open the menu.
  closeButton.addEventListener('click', closemenu); // When the "closeButton" is clicked, it calls the closemenu() function to close the menu.
});

