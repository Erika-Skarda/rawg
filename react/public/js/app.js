var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
    
var myCarousel = document.querySelector('#demo')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  
})