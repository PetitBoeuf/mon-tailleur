let dots          = 4;
let sliderElem    = document.querySelector('.slider')
let dotElems      = sliderElem.querySelectorAll('.slider__dot')
let indicatorElem = sliderElem.querySelector('.slider__indicator')

Array.prototype.forEach.call(dotElems, (dotElem) => {
		
	dotElem.addEventListener('click', (e) => {

		let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
		let newPos     = parseInt(dotElem.getAttribute('data-pos'))

		let newDirection     = (newPos > currentPos ? 'right' : 'left')
		let currentDirection = (newPos < currentPos ? 'right' : 'left')

		indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
		indicatorElem.classList.add(`slider__indicator--${ newDirection }`)		
		sliderElem.setAttribute('data-pos', newPos)
		
	})
	
})

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop + 100 < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
window.addEventListener('scroll', function() {
	if(isScrolledIntoView(document.querySelector("#first-section-desc"))){
		document.querySelector("#first-section-desc").childNodes[1].classList.add("visible-animated-part");
		document.querySelector("#first-section-desc").childNodes[3].classList.add("visible-animated-part");
	}
	if(isScrolledIntoView(document.querySelector("#second-section-desc"))){
		document.querySelector("#second-section-desc").childNodes[1].classList.add("visible-animated-part");
		document.querySelector("#second-section-desc").childNodes[3].classList.add("visible-animated-part");
	}
});
