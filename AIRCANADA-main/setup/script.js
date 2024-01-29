
document.addEventListener('DOMContentLoaded', function () {
// Toggle Navigation Bar
const navbar = document.getElementById('navbar');
const toggleBtn = document.getElementById('toggleBtn');
let isNavbarVisible = true;

DisappearBtn.addEventListener('click', function () {
    isNavbarVisible = !isNavbarVisible;
    navbar.style.display = isNavbarVisible ? 'flex' : 'none';
});

// Like/DisLike buttons
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const resetBtn = document.getElementById('resetBtn');
const counterDisplay = document.getElementById('counterDisplay');
let counter = 0;

likeBtn.addEventListener('click', function () {
    counter += 1;
    updateCounterColor();
});

dislikeBtn.addEventListener('click', function () {
    counter -= 1;
    updateCounterColor();
});

resetBtn.addEventListener('click', function () {
    counter = 0;
    updateCounterColor();
});

function updateCounterColor() {
    counterDisplay.textContent = counter;

    if (counter > 0) {
        counterDisplay.style.color = 'blue';
    } else if (counter < 0) {
        counterDisplay.style.color = 'red';
    } else {
        counterDisplay.style.color = 'black';
    }

}


// Changing Color for background
const colorFlipBtn = document.getElementById('colorFlipBtn');
const colorSchemes = ['#03114B', '#002828', '#FFFFFF', '#FED1BB'];
let currentColorSchemeIndex = 0;

colorFlipBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = colorSchemes[currentColorSchemeIndex];
    currentColorSchemeIndex = (currentColorSchemeIndex + 1) % colorSchemes.length;
});




// Special Button
const specialBtn = document.getElementById('specialBtn');

specialBtn.addEventListener('click', function () {
    alert('This is very creative');
});
})


