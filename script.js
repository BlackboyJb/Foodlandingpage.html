const mobile = document.querySelector('.mobile');
const sidetog = document.querySelector('#sidebar');
const cancel = document.querySelector('.cancel')


mobile.addEventListener('click', function () {
    mobile.classList.toggle('in-active')
    sidetog.classList.toggle('active')
})


cancel.addEventListener('click', function () {
    sidetog.classList.toggle('active')
    cancel.classList.toggle('in-active')

})


var step = 100;
var stepFilter = 60;
var scrolling = true;






