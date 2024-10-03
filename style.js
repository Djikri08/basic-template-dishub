// JavaScript function to filter the columns based on the button clicked
function filterSelection(category) {
    var columns, i;
    columns = document.getElementsByClassName("column");
  
    // If "all" is selected, show all columns, otherwise show the specific category
    if (category === "all") category = "";
    
    // Loop through all columns and hide those that don't match the category
    for (i = 0; i < columns.length; i++) {
      removeClass(columns[i], "show");
      if (columns[i].className.indexOf(category) > -1) addClass(columns[i], "show");
    }
  }
  
  // Helper function to add class to an element
  function addClass(element, name) {
    var arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Helper function to remove class from an element
  function removeClass(element, name) {
    var arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
//layanan 
  function animateOnScroll() {
    var elements = document.querySelectorAll('.fade-in-up, .zoom-in');
    elements.forEach(function (el) {
      var position = el.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      if (position < windowHeight - 100) {
        el.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);

