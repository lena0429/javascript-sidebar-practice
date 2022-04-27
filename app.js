// we can start by selecting the DOM elements
const toggleButton = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-btn");

// add event listener
toggleButton.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");

})

closeButton.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})