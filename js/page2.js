let rotatingOval = document.querySelectorAll('.rotating-oval');
let TextHero = document.querySelector('');
console.log(rotatingOval);
let rotatingItemCounter = 0;

function clicked1(event) {
    console.log("clicked!")
    rotatingOval[rotatingItemCounter].setAttribute('class', 'rotating-oval')
    rotatingItemCounter++;
    if (rotatingItemCounter === 3) {rotatingItemCounter = 0};
}
TextHero.addEventListener('click', clicked1);
