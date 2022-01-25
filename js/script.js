//  Показ модального окна

const modalBtns = document.querySelectorAll('.modal-active'),
		modalContent = document.querySelector('.modal');

console.log(modalBtns);

modalBtns.forEach(item => {
	item.addEventListener('click', () => {
		modalContent.style.display = 'block';
		document.body.style.overflow = 'hidden';
	})
	modalContent.addEventListener('click', (e) => {
		if(e.target.classList.contains('modal__inner')) {
			modalContent.style.display = '';
			document.body.style.overflow = '';
		}
		
	})
})







// Слайдер в  products

const sliderBtns = document.querySelectorAll('.products-btn'),
		sliderContents = document.querySelectorAll('.products__item');

function hide () {
		sliderBtns.forEach(item => {
			item.classList.remove('products-btn--active');

		})
		sliderContents.forEach(items => {
			items.style.display = 'none';
		})

};


function showContent (i) {
	sliderContents[i].style.display = 'block';
	sliderBtns[i].classList.add('products-btn--active');
	
}
showContent(0);
sliderBtns.forEach ((item,index) => {
	item.addEventListener('click', () => {
		hide();
		showContent(index)
	})
})









