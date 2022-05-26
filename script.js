function myFunction() {
    navLinks = document.getElementsByClassName('nav-link');
    for (var x = 0; x < navLinks.length; x++) {
        if (navLinks[x].style.display === "block") {
            navLinks[x].style.display = "none";
   }
       else {
           navLinks[x].style.display = "block";
   }
  }
}